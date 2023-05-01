import React, { useEffect, useState } from "react";

import Treemap from "../../charts/Treemap";
import Navbar from "../../components/navbar/navbar";
import WordCloud from "../../components/wordcloud/wordcloud";
import Cluster from "../../types/Cluster";
import InduceCard from "./InduceCard";
import HomeBanner from "./HomeBanner";
import { CircularProgress } from "@mui/material";
import useWindowDimensions from "../../components/common/widthAnHeight";
type Props = {};

const Home = (props: Props) => {
  // Set useState Data
  const [treeData, setTreeData] = useState<Cluster>();
  // Get width and height
  const { height, width } = useWindowDimensions();

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
  }, [width]);

  return (
    <div>
      <body className="flex justify-end bg-center bg-gradient-to-b from-[#FF585D] to-[#FFB549] bg-no-repeat min-h-screen w-full ">
        <div className="min-h-screen min-w-full">
          <div className="flex items-center">
            <div className="relative isolate pt-0 lg:px-0 ">
              <HomeBanner />
              <div className="bg-white w-screen text-black">
                <div className="flex justify-center flex-row gap-8 pt-10 px-10 mb-px-0">
                  <InduceCard />
                </div>
                <h1 className="flex justify-center text-4xl my-2 font-bold text-red-500 pt-5">
                  นโยบายไหนถูกกล่าวถึงบ่อยที่สุด ?
                </h1>
                <div className="grid grid-cols-1 place-items-center pb-5 mb-px-10">
                  <WordCloud />
                </div>
                <h1 className="flex justify-center text-4xl my-2 font-bold text-red-500 pt-5">
                  รู้หรือไม่ว่า?
                </h1>
                <h3 className="flex justify-center text-2xl font-bold text-blue-900 pb-5">
                  นโยบายการศึกษาคิดเป็นเพียง 2.7% ของนโยบายทั้งหมด
                </h3>
                <div className="flex justify-center shadow-xl rounded-lg">
                  {treeData !== undefined ? (
                    <Treemap
                      data={treeData}
                      height={width > 768 ? 2000 : 700}
                      width={width}
                    />
                  ) : (
                    <div className="pt-10">
                      <CircularProgress />
                    </div>
                  )}
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
