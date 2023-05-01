import React from "react";
import Hand from "../../assets/hand.png";
import Bulb from "../../assets/bulb.png";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={Bulb} className="w-[20vw] relative top-[10%]" />
      <img src={Hand} className="h-[250px] w-[350px]" />
      <div className="absolute  top-[200px] w-[100vw] text-[60px] text-center font-bold text-white leading-tight	drop-shadow-md md:text-[80px]">
        Creativity
        <br />
        From
        <br />
        Policy
      </div>
    </div>
  );
};

export default HomeBanner;
