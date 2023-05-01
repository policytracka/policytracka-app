import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import HeaderTitle from "../../components/header/HeaderTtitle";
import HeaderTitle4Line from "../../components/header/HeaderTtitle4Line";
import Banner from "../../components/banner/Banner";

type Props = {};

const PartyPolicy = (props: Props) => {
  // Mockup data
  const policyName = "เพิ่มโรงเรียน 3";
  const partyName = "พรรคก้าวไกล";
  const policyAmount = 23;

  return (
    <div>
      <Banner
        topic={
          <>
            Policy
            <br />
            VS
            <br />
            Policy
            <br />
          </>
        }
        subtopic={"เปรียบเทียบนโยบายระหว่างพรรค"}
      />
      <div className="bg-white w-screen text-black pb-10 px-10">
        {/* Header */}
        <HeaderTitle4Line
          title1={"นโยบาย"}
          title2={partyName}
          title3={policyName}
          title4={`พบ  ${policyAmount}  นโยบาย`}
        />
        {/* Content */}
      </div>
    </div>
  );
};
export default PartyPolicy;
