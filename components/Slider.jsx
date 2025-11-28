"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdLink } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Slider() {
  return (
    <div
      className="w-[380px] flex flex-col h-[230px] bg-[#171717] mt-[50px] border "
      style={{
        borderImage: "linear-gradient(to right,#DA8FFF,#FF6482,#FFB340)1",
      }}
    >
      <div className="flex justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <Image
            src="/images/207221800259cfe4e9010013f1641a3a2ea57c3f.jpg"
            width={40}
            height={40}
            alt="user"
            className="rounded-full"
          />
          <p className="text-[14px] text-[#FFFFFF] font-dirooz font-bold">
            رضا قاسمی
          </p>
        </div>
        <div className="text-[12px] flex items-center gap-1">
          <span className="text-[#FFFFFF]">4.7</span>
          <FaStarHalfAlt className="text-[#FFB340]" />
        </div>
      </div>
      <div className="px-5 pt-5">
        <p className="text-[12px] text-[#FFFFFF] font-dirooz font-semibold text-wrap">
          قبل از لوما، اشتراک سه سرویس هوش مصنوعی مختلف را داشتم. الان تمام
          کارهایم را با نصف هزینه و در یک پلتفرم یکپارچه انجام می‌دهم. دسترسی به
          همه مدل‌ها، همه‌چیز را ساده کرده.
        </p>
      </div>
      <div className="px-5 pt-5 flex gap-2 items-center">
        <p className="text-[13px] text-[#FFFFFF] font-dirooz font-extrabold">
          تگ ها:
        </p>
        <div className="bg-[#F0DCF5] justify-center items-center flex rounded-4xl w-[75px] h-5">
          <p className="text-[11px] font-dirooz bg-linear-to-r from-[#291433] to-[#8944AB] bg-clip-text text-transparent p-2   ">
            چت هوشمند
          </p>
        </div>
        <div className="bg-[#F0DCF5] justify-center items-center flex rounded-4xl w-[75px] h-5">
          <p className="text-[11px] font-dirooz bg-linear-to-r from-[#291433] to-[#8944AB] bg-clip-text text-transparent p-2   ">
            تجربه کاربری
          </p>
        </div>
      </div>
      <div className="mx-5 mt-5 border-t  items-center gap-2 font-dirooz border-[#FFFFFFBF] flex justify-center">
        <Link
          href="/"
          className="text-[10px]  font-dirooz font-semibold mt-2 text-[#007AFF]"
        >
          لینک به X
        </Link>
        <IoMdLink className="text-[#007AFF] text-[17px] mt-2" />
      </div>
    </div>
  );
}
