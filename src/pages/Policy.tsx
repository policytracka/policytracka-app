import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Grid from "@mui/material/Grid";
import ImageLeftCard from "../components/ImageLeftCard";
import HeaderTitle4Line from "../components/HeaderTtitle4Line";
import { useParams } from 'react-router-dom';
import HeaderTitle from "../components/HeaderTtitle";

type Props = {};

const Policy = (props: Props) => {
  const { PolicyId } = useParams();
  const [policyTitle, setPolicyTitle] = useState("");
  const [policyAmount, setPolicyAmount] = useState(0);
  const [policyItems, setPolicyItems] = useState<(any[])>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/api/cluster_from_group?group=${PolicyId}`);
      const data = await res.json()
      setPolicyTitle(data.group.name)
      setPolicyAmount(data.group.data.length)
      setPolicyItems(data.group.data)
    };
    fetchData();
  }, []);

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
        <HeaderTitle
          topic1={"เปรียบเทียบนโยบาย"}
          hightlightPolicy={policyTitle}
          topic2={"พบ"}
          hightlightPolicyCount={policyAmount.toString()}
          topic3={"นโยบาย"}
        />
        <div className="my-10">
          <div className="grid grid-cols-1">
            {policyItems.map((item, index) => (
              <div key={index}>
                <ImageLeftCard title={item.title} party={item.party}  image={""}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
