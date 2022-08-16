import React from "react";
import banner from "./Assets/5.jpg";

function Banner() {
  return (
    <div>
      <div>
        <img
          className="w-full h-full bg-cover md:pt-12"
          src={banner}
          alt="banner "
        />
      </div>
    </div>
  );
}

export default Banner;
