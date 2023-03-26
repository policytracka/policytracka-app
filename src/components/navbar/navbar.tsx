import React from "react";
import Logo from "../../assets/Logo_white.png";
import { useNavigate ,useParams} from 'react-router-dom'
type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className="flex 	justify-between text-[20px] text-white	font-bold	 items-center h-32 	w-[100vw] max-w-screen-2xl	">
      <img src={Logo} className="w-[237px] ml-[73px]" onClick={()=>{navigate('/')}} />
      <ul className="flex w-[550px] justify-evenly items-center mr-5">
        <li className="">เปรียบเทียบนโยบาย</li>
        <li className="">ติดตามนโยบาย</li>
        <li>เกี่ยวกับ</li>
      </ul>
    </div>
  );
};

export default Navbar;
