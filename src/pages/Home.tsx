import React, { useEffect, useState } from "react";

import Treemap from "../charts/Treemap";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import WordCloud from "../components/wordcloud/wordcloud";
import data from "../data";
import Card from "../components/card/card";
import Cluster from "../types/Cluster";
import TreeMapCard from "../components/TreemapCard/TreeMapCard";
type Props = {};

const Home = (props: Props) => {
  // Set useState Data
  const [treeData, setTreeData] = useState<Cluster>();
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://www.policytracka.live/api/treemap");
      const data = await res.json();
      // const tempData = {
      //   name: "Cluster",
      //   children: data.treemap,
      // };
      // setTreeData(tempData);
    };
    fetchDatas();
  }, []);

  return (
    <div className="bg-no-repeat min-h-screen w-full">
      <body className="flex justify-end bg-center bg-gradient-to-b from-[#FF585D] to-[#FFB549] bg-no-repeat min-h-screen w-full ">
        <div className="min-h-screen min-w-full">
          <div className="flex items-center">
          <div className="relative isolate pt-0 lg:px-0 ">
              <Navbar />
              <Hero />
              <div className="row-span-3">01</div>
              <div className="flex justify-center flex-row gap-4 pt-10">
                <Card />
              </div>
              <div className="grid grid-cols-1 place-items-center pt-10 pb-5">
                <WordCloud />
                <br/>
                <TreeMapCard/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </body>

    </div>
  );
};

export default Home;
