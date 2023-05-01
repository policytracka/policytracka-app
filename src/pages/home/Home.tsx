import React, { useEffect, useState } from "react";

import Treemap from "../../charts/Treemap";
import Navbar from "../../components/navbar/navbar";
import WordCloud from "../../components/wordcloud/wordcloud";
import Cluster from "../../types/Cluster";
import InduceCard from "./InduceCard";
import HomeBanner from "./HomeBanner";
type Props = {};

const Home = (props: Props) => {
  // Set useState Data
  const [treeData, setTreeData] = useState<Cluster>();
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://www.policytracka.live/api/treemap");
      const data = await res.json();
      const tempData = {
        name: "Cluster",
        children: data.treemap,
      };
      setTreeData(tempData);
    };
    fetchDatas();
  }, []);

  return (
    <div>
      <body className="flex justify-end bg-center bg-gradient-to-b from-[#FF585D] to-[#FFB549] bg-no-repeat min-h-screen w-full ">
        <div className="min-h-screen min-w-full">
          <div className="flex items-center">
            <div className="relative isolate pt-0 lg:px-0 ">
              <HomeBanner />
              <div className="bg-white w-screen text-black pb-10 px-10">
                <div className="flex justify-center flex-row gap-8 pt-10">
                  <InduceCard />
                </div>
                <div className="grid grid-cols-1 place-items-center pt-10 pb-5">
                  <WordCloud />
                  <br />
                  <div className="shadow-xl rounded-lg ">
                    {treeData !== undefined && (
                      <Treemap data={treeData} height={700} width={1300} />
                    )}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
