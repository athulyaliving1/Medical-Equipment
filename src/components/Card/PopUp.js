import React from "react";

function PopUp({ desc }) {
  return (
    <div className="bg-gray-400 relative">
      <div className="container md:mx-auto  ">
        <div className="text-3xl ">{desc}</div>
      </div>
    </div>
  );
}

export default PopUp;
