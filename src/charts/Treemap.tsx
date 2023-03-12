import * as d3 from 'd3'
import React, { useRef, useEffect } from 'react'
import Cluster from '../types/Cluster'

export default function Treemap({ width, height, data }: { width: number, height: number, data: Cluster }) {
  const svgRef = useRef(null)

  function renderTreemap() {
    const svg = d3.select(svgRef.current)

    svg.attr('width', width).attr('height', height)
    
    const root = d3
      .hierarchy<Cluster>(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value! - a.value!)

    const treemapRoot = d3.treemap<Cluster>().size([width, height]).padding(1)(root)

    const nodes = svg
    .selectAll('g')
    .data(treemapRoot.leaves())
    .join('g')
    .attr('transform', (d) => `translate(${d.x0},${d.y0})`)

    const fader = (color: string) => d3.interpolateRgb(color, '#fff')(0.3)
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader))

    nodes
      .append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => colorScale(d.data.name))

      const percentageFontSize = 64;
      const nameFontSize = 16;
  
      nodes
        .append('text')
        .text((d) => `${d.data.value}%`)
        .attr('font-size', `${percentageFontSize}px`)
        .attr('font-weight', 'bold')
        .attr('fill', 'white')
        .attr('x', 3)
        .attr('y', 64)

      nodes
        .append('text')
        .text((d) => `${d.data.name}`)
        .attr('font-size', `${nameFontSize}px`)
        .attr('font-weight', 'bold')
        .attr('fill', 'white')
        .attr('x', 3)
        .attr('y', 96)
    }

  useEffect(() => {
    renderTreemap()
  }, [data])

  return (
    <div>
      <svg ref= { svgRef } />
    </div>
    )
}
