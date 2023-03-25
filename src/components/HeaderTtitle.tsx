import React, { useEffect, useState } from "react";

type Props = {
    topic1: string;
    hightlightPolicy: string;
    topic2: string;
    hightlightPolicyCount: string
    topic3: string;
};

const HeaderTitle = (props: Props) => {
  return (
    <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-yellow-400">
        {props.topic1}
        </h3>
        <h1 className="text-7xl my-2 font-bold text-red-500">
            {props.hightlightPolicy}
        </h1>
        <h3 className="text-2xl font-bold text-blue-900">
        {props.topic2} {props.hightlightPolicyCount} {props.topic3}
        </h3>
    </div>
  );
};
export default HeaderTitle;
