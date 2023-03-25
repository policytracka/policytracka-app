import React from "react";
import Logo from "../../assets/Logo_white.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex 	justify-between text-[20px] text-white	font-bold	 items-center h-32 	w-[100vw] max-w-screen-2xl	">
      <img src={Logo} className="w-[237px] ml-[73px]" />
      <ul className="flex w-[550px] justify-evenly items-center mr-5">
        <li className="">เปรียบเทียบนโยบาย</li>
        <li className="">ติดตามนโยบาย</li>
        <li>เกี่ยวกับ</li>
      </ul>
    </div>
  );
};

export default Navbar;
