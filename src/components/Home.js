import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import HospistalCots from "./HospistalCots";
import Title from "./Title";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Title />
      <HospistalCots />
    </div>
  );
}

export default Home;
