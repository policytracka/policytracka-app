import React, { useState } from "react";
import CategoryGroup from "../components/CategoryGroup";
import Navbar from "../components/navbar/navbar.js";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import ContentCard, { CardContent } from "../components/PolicyCard";

type Props = {};

const TopicPolicy = (props: Props) => {
  const [hightlightPolicy, setHightlightPolicy] = useState("การศึกษา");
  const [hightlightPolicyCount, setHightlightPolicyCount] = useState(500);
  const [policyCategories, setPolicyCategories] = useState<string[]>([
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
    "สิ่งแวดล้อม",
  ]);

  const [policyItems, setPolicyItem] = useState<CardContent[]>([
    {
      topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/mock_card.jpg",
      refContent: "policy1",
    },
    {
      topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/mock_card.jpg",
      refContent: "policy1",
    },
    {
      topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/mock_card.jpg",
      refContent: "policy1",
    },
    {
      topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/mock_card.jpg",
      refContent: "policy1",
    },
  ]);

  return (
    <div className="bg-no-repeat min-h-screen w-full">
      <div className="bg-auto bg-no-repeat min-h-screen w-screen">
        <div className="min-h-screen min-w-screen relative">
          <div className="relative isolate px-6 pt-0 lg:px-8 ">
            <Navbar />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-8xl mb-5 font-bold drop-shadow-lg">
              Topic Policy
            </h1>
            <h5 className="text-4xl font-bold">หัวข้อนโยบาย</h5>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen text-black pb-10 px-10">
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold text-yellow-400">
            มีนโยบายเกี่ยวกับ
          </h3>
          <h1 className="text-7xl my-2 font-bold text-red-500">
            {hightlightPolicy}
          </h1>
          <h3 className="text-2xl font-bold text-blue-900">
            มากถึง {hightlightPolicyCount} นโยบาย
          </h3>
        </div>

        <CategoryGroup
          contents={policyCategories}
          onClick={() => {
            // action here
          }}
        />
        <div className="my-10">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {policyItems.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ContentCard
                  topic={item.topic}
                  description={item.description}
                  image={item.image}
                  refContent={item.refContent}
                  onClickButton={(refContent) => {
                    console.log({ refContent });
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Stack alignItems="center">
            <Pagination
              className="flex-center"
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default TopicPolicy;
