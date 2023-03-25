import React, { useEffect, useState } from "react";
import Treemap from "../charts/Treemap";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import WordCloud from "../components/wordcloud/wordcloud";
import data from "../data";
import Card from "../components/card/card";
import Cluster from "../types/Cluster";
type Props = {};

const Home = (props: Props) => {
  // Set useState Data
  const [treeData, setTreeData] = useState<Cluster>();
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("http://localhost:8000/api/treemap");
      const data = await res.json();
      const tempData = {
        name: 'Cluster',
        children: data.treemap
      }
      console.log("Data ", data.treemap)
      setTreeData(tempData);
    };
    fetchDatas();
  }, []);

  return (
    <div className="bg-no-repeat min-h-screen w-full">
      <body className="bg-auto bg-no-repeat min-h-screen w-full ">
        <div className="min-h-screen min-w-full">
          <div className="flex items-center">
          <div className="relative isolate pt-0 lg:px-0 ">
            <Navbar />
            <Hero />
            <div className="grid grid-cols-2 gap-0 place-items-center pt-4 ">
              <Card />
            </div>
            <div className="grid grid-cols-1 gap-4 place-items-center pt-5">
              <WordCloud />
              {
                treeData && <Treemap data={treeData} height={400} width={600} />
              }
            </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
