import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import Cluster from "../types/Cluster";
import { useNavigate, useParams } from "react-router-dom";

export default function Treemap({
  width,
  height,
  data,
}: {
  width: number;
  height: number;
  data: Cluster;
}) {
  const navigate = useNavigate();
  const { TopicPolicyId } = useParams();
  const svgRef = useRef(null);
  let tooltip: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;

  function renderTreemap() {
    tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("padding", "5px")
      .style("display", "none")
      .style("pointer-events", "none");

    const onMouseOver = (_: Event, d: d3.HierarchyRectangularNode<Cluster>) => {
      tooltip.style("display", "block");
    };

    const onMouseMove = (
      event: React.MouseEvent<SVGGElement, MouseEvent>,
      d: d3.HierarchyRectangularNode<Cluster>
    ) => {
      tooltip.style("display", "block");
      tooltip.style("background-color", colorScale(d.data.name));
      tooltip.style("left", event.pageX + 10 + "px");
      tooltip.style("top", event.pageY + 10 + "px");
      tooltip.text(`${d.data.name} ${d.data.value}%`);
    };

    const onMouseOut = (_: Event, d: d3.HierarchyRectangularNode<Cluster>) => {
      tooltip.style("display", "none");
    };

    const onClick = (_: Event, d: d3.HierarchyRectangularNode<Cluster>) => {
      tooltip.style("display", "none");
      navigate(`/similarkey/${d.data.id}`);
    };

    const svg = d3.select(svgRef.current);

    // clear the existing elements in the SVG
    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);
    const root = d3
      .hierarchy<Cluster>(data)
      .sum((d) => d.value!)
      .sort((a, b) => b.value! - a.value!);
    const treemapRoot = d3.treemap<Cluster>().size([width, height]).padding(1)(
      root
    );

    const nodes = svg
      .selectAll("g")
      .data(treemapRoot.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
      .on("mouseover", onMouseOver)
      .on("mousemove", onMouseMove)
      .on("mouseout", onMouseOut);

    const fader = (color: string) => d3.interpolateRgb(color, "#fff")(0.3);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader));

    nodes
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d) => colorScale(d.data.name))
      .attr("cursor", "pointer")
      .on("click", onClick);

    const percentageFontSize = 34;
    const nameFontSize = 14;

    nodes
      .append("text")
      .text((d) => `${d.data.value}%`)
      .attr("font-size", `${percentageFontSize}px`)
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("x", 20)
      .attr("y", 64)
      .attr("cursor", "pointer")
      .on("click", onClick);

    nodes
      .append("text")
      .text((d) => `${d.data.name}`)
      .attr("font-size", `${nameFontSize}px`)
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("x", 20)
      .attr("y", 96)
      .attr("cursor", "pointer")
      .on("click", onClick);
  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}
