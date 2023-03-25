import React, { useState } from "react";

interface Props {
  contents: string[];
  onClick: (content: string) => void;
}

export default function CategoryGroup(props: Props) {
  const [selectPosition, setSelectPosition] = useState(0);
  return (
    <div className="text-center">
      {props.contents.map((content, index) => (
        <span
          className={`${
            selectPosition === index ? "bg-orange-500 !text-white" : ""
          } center cursor-pointer mx-1 mb-2 relative inline-block select-none whitespace-nowrap rounded-full border border-orange-500 py-2 px-3.5 align-baseline font-sans font-bold uppercase leading-none text-orange-500 hover:bg-orange-500 hover:text-white`}
          key={index}
          onClick={() => {
            props.onClick(content);
            setSelectPosition(index);
          }}
        >
          {content}
        </span>
      ))}
    </div>
  );
}
