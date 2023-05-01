import React, { useEffect, useState } from "react";

type Props = {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
};

const HeaderTitle4Line = (props: Props) => {
  return (
    <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-yellow-400">
        {props.title1}
        </h3>
        <h1 className="text-7xl my-2 font-bold text-red-500">
            {props.title2}
        </h1>
        <h3 className="text-2xl font-bold text-blue-900">
          {props.title3}
        </h3>
        <h4 className="text-1xl font-bold text-blue-900">
          {props.title4}
        </h4>
    </div>
  );
};
export default HeaderTitle4Line;
