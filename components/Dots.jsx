import React from "react";

export default function Dots() {
  return (
    <div className=" w-full h-[2000px] absolute -z-10 top-[700px] left-0 right-0">
      <div
        className="w-full h-full "
        style={{
          backgroundImage:
            "radial-gradient(circle at center,rgba(217,217,217,0.07) 0 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div>
    </div>
  );
}
