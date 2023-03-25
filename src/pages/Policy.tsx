import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Grid from "@mui/material/Grid";
import ImageLeftCard from "../components/ImageLeftCard";

type Props = {};

const Policy = (props: Props) => {
  const [policyItems, setPolicyItems] = useState([
    {
      title: "",
      content: "",
    },
    {
      title: "",
      content: "",
    },
  ]);
  const [policyTitle, setPolicyTitle] = useState("เพิ่มโรงเรียน 3");
  const [partyTitle, setPartyTitle] = useState("พรรคก้าวไกล");
  const [policyAmount, setPolicyAmount] = useState(10);

  return (
    <div className="bg-no-repeat min-h-screen w-full">
      {/* Banner */}
      <div className="bg-auto bg-no-repeat min-h-screen w-screen">
        <div className="min-h-screen min-w-screen relative">
          <div className="relative isolate px-6 pt-0 lg:px-8 ">
            <Navbar />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-8xl mb-5 font-bold drop-shadow-lg">Policy</h1>
            <h5 className="text-4xl font-bold">นโยบายพรรค</h5>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen text-black pb-10 px-10">
        <div>
          <div className="text-3xl">นโยบาย</div>
          <div className="text-6xl">{policyTitle}</div>
          <div className="text-4xl">{partyTitle}</div>
          <div className="text-3xl">พบ {policyAmount} นโยบาย</div>
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1">
            {policyItems.map((item, index) => (
              <div key={index}>
                <ImageLeftCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
