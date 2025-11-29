import React from "react";

import Slider from "./Slider";
import Blobs from "./Blobs";

export default function Comments() {
  return (
    <>
      <div className="flex w-full text-[40px] flex-col items-center mt-[100px]">
        <h1 className="font-bold font-dirooz mb-5  bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent ">
          نظرات کاربران
        </h1>
        <div className="overflow-hidden whitespace-nowrap">
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marquee "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
        </div>
        <div className="relative">
          <Blobs />
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
          <div
            className="inline-block animate-marqueeright "
            // style={{ animationDuration: `10s` }}
          >
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
