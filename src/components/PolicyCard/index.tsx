import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props extends CardContent {
  onClickButton: (content: string) => void;
}

export interface CardContent {
  topic: string;
  description: string;
  image: string;
  refContent: string;
}

export default function ContentCard(props: Props) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.topic}
        height="140"
        image={props.image}
      />
      <CardContent className="m-3">
        <Typography gutterBottom variant="h5" component="div">
          {props.topic}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="justify-end mx-3 mb-3">
        <button
          onClick={() => props.onClickButton(props.refContent)}
          className="bg-orange-400 text-sm text-white !outline-none px-20"
        >
          เปรียบเทียบพรรค
        </button>
      </CardActions>
    </Card>
  );
}
