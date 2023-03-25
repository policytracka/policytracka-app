import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import BarGraph from "./BarChart";
import HeaderTitle from "../../components/HeaderTtitle";

type Props = {};

const PolicyGraph = (props: Props) => {
  // Mockup data 
  const policyTitle = "เพิ่มโรงเรียน 3"
  const countPolicy = 13;
  const chartData = [
    {
      id: "id1",
      rank: "1",
      name: "พรรคเพื่อไทย",
      supply: "12",
      amount: "12",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id2",
      rank: "2",
      name: "พรรคก้าวไกล",
      supply: "5",
      amount: "5",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id3",
      rank: "3",
      name: "พรรคแสงธรรม",
      supply: "2",
      amount: "2",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id4",
      rank: "4",
      name: "พรรคแสงส่อง",
      supply: "3",
      amount: "3",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id5",
      rank: "5",
      name: "พรรคเพื่อธรรม",
      supply: "6",
      amount: "6",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id6",
      rank: "6",
      name: "พรรคเพื่อไทย",
      supply: "12",
      amount: "12",
      explorer: "https://blockchain.info/"
    },
    {
      id: "id7",
      rank: "7",
      name: "พรรคก้าวไกล",
      supply: "5",
      amount: "5",
      explorer: "https://blockchain.info/"
    },
  ]
  
  return (
    <div className="bg-no-repeat min-h-screen w-full">
      {/* Banner */}
      <div className="bg-auto bg-no-repeat min-h-screen w-screen">
        <div className="min-h-screen min-w-screen relative">
          <div className="relative isolate px-6 pt-0 lg:px-8 ">
            <Navbar />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-8xl mb-5 font-bold drop-shadow-lg">
              Policy<br/>VS<br/>Policy<br/>
            </h1>
            <h5 className="text-4xl font-bold">เปรียบเทียบนโยบายระหว่างพรรค</h5>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen text-black pb-10 px-10">
      {/* Header */}
      <HeaderTitle topic1={"เปรียบเทียบ"} hightlightPolicy={policyTitle} topic2={"พบ"} hightlightPolicyCount={chartData.length.toString()} topic3={"นโยบาย"} />
      <BarGraph data={chartData}/>
      </div>
    </div>
  );
};
export default PolicyGraph;
