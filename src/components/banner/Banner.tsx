import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";

type Props = {
  topic: any;
  subtopic: string;
};

const Banner = (props: Props) => {
  return (
    <div>
      <div className="min-h-screen min-w-screen relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-8xl mb-5 font-bold drop-shadow-lg">
            {props.topic}
          </h1>
          <h5 className="text-4xl font-bold">{props.subtopic}</h5>
        </div>
      </div>
    </div>
  );
};
export default Banner;
