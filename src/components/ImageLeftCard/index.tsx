import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PolicyLogo from "../../assets/partyLogo";

interface Props {
  party: string;
  title: string;
  detail?: string;
  image?: string;
  link?: string;
}

export default function ImageLeftCard(props: Props) {
  return (
    <div className="w-full max-w-full flex shadow-md mb-10 border rounded-md">
      <div
        className="h-auto lg:h-auto w-64 flex-none bg-cover rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('/Partylogo/${PolicyLogo.indexOf(props.party)+1}.png')` , height: '100px', width: '100px'}}
        title="Woman holding a mug"
      ></div>
      <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-gray-900 font-bold text-xl mb-2">
          {props.title}
        </div>
        <p className="text-gray-700 text-base">
          {props.party}
        </p>
        {
          props.link && <div className="text-right">Read more &gt;</div>
        }
      </div>
    </div>
  );
}
