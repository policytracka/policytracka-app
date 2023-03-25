import React from "react";
import Treemap from "../charts/Treemap.js";
import Hero from "../components/hero/hero.js";
import Heropage from "../components/heropage.js";
import Navbar from "../components/Layout.js";
import OutlinedCard from "../components/card";
import WordCloud from "../components/wordcloud";
import data from "../data";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-no-repeat min-h-screen w-full">
      <body className="bg-auto bg-no-repeat min-h-screen w-full ">
        <div className="min-h-screen min-w-full">
          <div className="relative isolate px-6 pt-0 lg:px-8 ">
            <Navbar />
            <Heropage />
            <div className="grid grid-cols-2 gap-4">
              <OutlinedCard />
            </div>
            <div className="grid grid-cols-1 gap-4 place-items-center pt-5">
              <WordCloud />
              <Treemap data={data} height={400} width={600} />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
