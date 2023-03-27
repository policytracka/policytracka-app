import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import BarGraph from "./BarChart";
import HeaderTitle from "../../components/HeaderTtitle";
import { CircularProgress } from "@mui/material";

type Props = {};

type ChartStruct = {
  id: string,
  rank: string, 
  name: string,
  supply: number
  amount: number,
  explorer: string,
}

const PolicyGraph = (props: Props) => {
  const navigate = useNavigate();
  const { PolicyId } = useParams();
  const [mapChart, setMapChart] = useState<Map<string, number>>();
  const [resultAmount, setResultAmount ] = useState(0);
  const [chartStruct, setChartStruct ]= useState<any[]>([]);
  const [policyTitle, setPolicyTitle] = useState("");

  const navigateToPartyPolicyPage = () => {
    navigate("/partypolicy");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.policytracka.live/api/cluster_from_group?group=${PolicyId}`)
      const data = await res.json()
      setPolicyTitle(data.group.name)
      const dataArr = Object.values(data.group.data);
      setResultAmount(data.group.data.length);
      let mapChart =  new Map<string, number>();
      for (let index = 0; index< dataArr.length-1; index ++) {
        let ele: {
          party: string;
          title: string;
        } = dataArr[index] as {
          party: string;
          title: string;
        };
        if (mapChart.get(ele.party) !== undefined) {
          let countVal = mapChart.get(ele.party) ? mapChart.get(ele.party) : 0;
          mapChart.set(ele.party, countVal !== undefined ? countVal +1 : 0);
        } else {
          mapChart.set(ele.party, 1);
        }
      }
      mapChart !== undefined && setMapChart(mapChart as Map<string, number>);
      console.log(mapChart)
    };
    const mappingData = (mapTemp: Map<string, number> | null) => {
      const arrMapVal = mapTemp && Array.from(mapTemp.values());
      const arrMapKey = mapTemp && Array.from(mapTemp.keys());
      let arrTemp = [];
      if (arrMapVal && arrMapKey) {
        for (let i = 0; i < arrMapKey.length-1; i++) {
          let tempData = {
            id: i,
            rank: arrMapVal[i],
            name: arrMapKey[i],
            supply: arrMapVal[i],
            amount: arrMapVal[i],
          }
      
          arrTemp.push(tempData);
        }
        arrTemp !== undefined && setChartStruct(arrTemp)
      }
      console.log(arrTemp)
    }
    fetchData();
    mapChart !== undefined &&mappingData(mapChart);
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
            <h1 className="text-8xl mb-5 font-bold drop-shadow-lg">
              Policy
              <br />
              VS
              <br />
              Policy
              <br />
            </h1>
            <h5 className="text-4xl font-bold">เปรียบเทียบนโยบายระหว่างพรรค</h5>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen text-black pb-10 px-10">
        {/* Header */}
        <HeaderTitle
          topic1={"เปรียบเทียบ"}
          hightlightPolicy={policyTitle}
          topic2={"พบ"}
          hightlightPolicyCount={resultAmount.toString()}
          topic3={"นโยบาย"}
        />
        { 
          chartStruct !== undefined ? 
            <BarGraph data={chartStruct} /> 
          : 
            <div style={{marginLeft: "50%"}}>
              <CircularProgress /> 
            </div>
        }
      </div>
    </div>
  );
};
export default PolicyGraph;
