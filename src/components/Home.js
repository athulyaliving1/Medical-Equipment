import React from "react";
import AirBeds from "./AirBeds";
import Banner from "./Banner";
import BPStethescope from "./BPStethescope";
import Projects from "./Card/Project";
// import Cosumables from "./Cosumables";
import Footer from "./Footer";
import Header from "./Header";
// import HospistalCots from "./HospistalCots";
// import HospitalCotsCard from "./Card/HospitalCotsCard";
import Nebuliser from "./Nebuliser";
import OxygenCyclinder from "./OxygenCyclinder";
import Title from "./Title";
import Ventilator from "./Ventilator";
import WheelChair from "./WheelChair";
// import ProjectCot from "./Card/ProjectCot";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Title />

      <WheelChair />
      <Ventilator />
      <OxygenCyclinder />
      <Nebuliser />
      <AirBeds />
      <BPStethescope />

      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
