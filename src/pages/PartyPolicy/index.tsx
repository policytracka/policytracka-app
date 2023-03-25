import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import HeaderTitle from "../../components/HeaderTtitle";
import HeaderTitle4Line from "../../components/HeaderTtitle4Line";

type Props = {};

const PartyPolicy = (props: Props) => {
    // Mockup data
    const policyName = "เพิ่มโรงเรียน 3"
    const partyName = "พรรคก้าวไกล"
    const policyAmount = 23

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
        <HeaderTitle4Line title1={"นโยบาย"} title2={policyName} title3={partyName} title4={`พบ  ${policyAmount}  นโยบาย`} />
        {/* Content */}
        </div>
        </div>
    );
};
export default PartyPolicy;
