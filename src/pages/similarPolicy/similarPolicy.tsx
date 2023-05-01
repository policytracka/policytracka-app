import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Grid from "@mui/material/Grid";
import ImageLeftCard from "../../components/ImageLeftCard";
import HeaderTitle4Line from "../../components/header/HeaderTtitle4Line";
import { useParams } from "react-router-dom";
import HeaderTitle from "../../components/header/HeaderTtitle";
import { CircularProgress } from "@mui/material";
import Banner from "../../components/banner/Banner";
import BarGraph from "../PolicyCompare/BarChart";

type Props = {};

const Policy = (props: Props) => {
  const { PolicyId } = useParams();
  const [policyTitle, setPolicyTitle] = useState("");
  const [policyAmount, setPolicyAmount] = useState(0);
  const [policyItems, setPolicyItems] = useState<any[]>([]);
  const [mapChart, setMapChart] = useState<Map<string, number>>();
  const [resultAmount, setResultAmount] = useState(0);
  const [chartStruct, setChartStruct] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.policytracka.live/api/cluster_from_group?group=${PolicyId}`
      );
      const data = await res.json();
      setPolicyTitle(data.group.name);
      setPolicyAmount(data.group.data.length);
      setPolicyItems(data.group.data);
      const dataArr = Object.values(data.group.data);
      let mapChart = new Map<string, number>();
      for (let index = 0; index < dataArr.length; index++) {
        let ele: {
          party: string;
          title: string;
        } = dataArr[index] as {
          party: string;
          title: string;
        };
        if (mapChart.get(ele.party) !== undefined) {
          let countVal = mapChart.get(ele.party) ? mapChart.get(ele.party) : 0;
          mapChart.set(ele.party, countVal !== undefined ? countVal + 1 : 0);
        } else {
          mapChart.set(ele.party, 1);
        }
      }
      mapChart !== undefined && setMapChart(mapChart as Map<string, number>);
      console.log(mapChart);
      const mappingData = (mapTemp: Map<string, number> | null) => {
        const arrMapVal = mapTemp && Array.from(mapTemp.values());
        const arrMapKey = mapTemp && Array.from(mapTemp.keys());
        let arrTemp = [];
        console.log(arrMapKey);
        if (arrMapVal && arrMapKey) {
          for (let i = 0; i < arrMapKey.length; i++) {
            let tempData = {
              id: i,
              rank: arrMapVal[i],
              name: arrMapKey[i],
              supply: arrMapVal[i],
              amount: arrMapVal[i],
            };

            arrTemp.push(tempData);
          }
          arrTemp !== undefined && setChartStruct(arrTemp);
          console.log(arrTemp);
        }
      };
      mapChart !== undefined && mappingData(mapChart);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Banner topic={"Policy"} subtopic={"นโยบายพรรค"} />
      <div className="grid grid-cols-1">
        <div className="bg-white w-screen text-black pb-10 px-10">
          {policyItems.length !== 0 && chartStruct ? (
            <div className="my-10">
              <HeaderTitle
                topic1={"เปรียบเทียบนโยบาย"}
                hightlightPolicy={policyTitle}
                topic2={"พบ"}
                hightlightPolicyCount={policyAmount.toString()}
                topic3={"นโยบาย"}
              />
              <div>
                <BarGraph data={chartStruct} />{" "}
              </div>
              {policyItems.map((item, index) => (
                <div key={index}>
                  <ImageLeftCard
                    title={item.title}
                    party={item.party}
                    image={""}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;
