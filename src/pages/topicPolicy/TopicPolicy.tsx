import React, { useState } from "react";
import CategoryGroup from "../../components/categoryGroup";
import Navbar from "../../components/navbar/navbar.js";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import ContentCard, { CardContent } from "../../components/policyCard";
import Banner from "../../components/banner/Banner";
import HeaderTitle from "../../components/header/HeaderTtitle";

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
    <div>
      {/* Banner */}
      <Banner topic={"Topic Policy"} subtopic={"หัวข้อนโยบาย"} />
      <div className="bg-white w-screen text-black pb-10 px-10">
        {/* Header */}
        <HeaderTitle
          topic1={"มีนโยบายเกี่ยวกับ"}
          hightlightPolicy={hightlightPolicy}
          topic2={"มากถึง"}
          hightlightPolicyCount={hightlightPolicyCount.toString()}
          topic3={"นโยบาย"}
        />
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
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default TopicPolicy;
