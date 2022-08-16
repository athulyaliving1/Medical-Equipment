import React from "react";
import AirBeds from "./AirBeds";
import Banner from "./Banner";
import BPStethescope from "./BPStethescope";
import Cosumables from "./Cosumables";
import Header from "./Header";
import HospistalCots from "./HospistalCots";
import Nebuliser from "./Nebuliser";
import OxygenCyclinder from "./OxygenCyclinder";
import Title from "./Title";
import Ventilator from "./Ventilator";
import WheelChair from "./WheelChair";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Title />
      <HospistalCots />
      <WheelChair />
      <Ventilator />
      <OxygenCyclinder />
      <Nebuliser/>
      <AirBeds/>
      <BPStethescope/>
      <Cosumables/>
    </div>
  );
}

export default Home;
