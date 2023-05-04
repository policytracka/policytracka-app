import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Grid from "@mui/material/Grid";
import ImageLeftCard from "../../components/ImageLeftCard";
import HeaderTitle4Line from "../../components/header/HeaderTtitle4Line";
import { useParams } from "react-router-dom";
import HeaderTitle from "../../components/header/HeaderTtitle";
import { CircularProgress } from "@mui/material";
import Banner from "../../components/banner/Banner";
import HeaderTitleWithSearch from "../../components/header/HeaderWithSearch";

type Props = {};

const SearchPolicy = (props: Props) => {
  const [policyItems, setPolicyItems] = useState<any[]>([]);
  const [keyPolicySearch, setKeyPolicySearch] = useState<string>("");
  const [countPolicy, setCountPolicy] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.policytracka.live/api/cluster?policy=${keyPolicySearch}`
      );
      const resps = await res.json();
      console.log("data ", resps);
      setPolicyItems(resps.cluster);
      
    };
    if (keyPolicySearch) {
      fetchData();
      setCountPolicy(policyItems.length);
      setKeyPolicySearch("");
    }
  }, [keyPolicySearch,countPolicy]);

  return (
    <div>
      <Banner topic={"Policy"} subtopic={"นโยบายพรรค"} />
      <div className="grid grid-cols-1">
        <div className="bg-white w-screen text-black pb-10 px-10">
          {/* {policyItems.length !== 0 ? ( */}
          <div className="my-10">
            <HeaderTitleWithSearch
              title1={"นโยบาย"}
              title2={"พบ"}
              title3={countPolicy.toString()}
              title4={"นโยบาย"}
              onSubmit={(val) => setKeyPolicySearch(val ? val : "")}
            />
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
          {/* ) : (
            <div className="flex justify-center pt-10">
              <CircularProgress />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPolicy;
