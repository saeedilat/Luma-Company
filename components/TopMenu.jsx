import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Roboto_Mono } from "next/font/google";
import TaggleBtn from "./TaggleBtn";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: "700",
});

export default function TopMenu() {
  return (
    <div className=" w-full mt-[55px] flex justify-evenly items-center">
      <span
        className={`font-bold ${roboto.className} text-[40px] bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent`}
      >
        luma
      </span>

      <div>
        <ul className="flex w-[495px] h-7 font-bold text-[18px] leading-7 font-dirooz gap-10 text-[#FFFFFF]">
          <li>وبلاگ</li>
          <li>تعرفه</li>
          <li className="flex items-center">
            <MdKeyboardArrowDown className="w-7 h-7" />
            منابع
          </li>
          <li className="flex items-center">
            <MdKeyboardArrowDown className="w-7 h-7" />
            سرویس ها
          </li>
          <li>راهکارها</li>
        </ul>
      </div>

      <div className="flex w-[235px] justify-between">
        <TaggleBtn />
        <button className="bg-[#3C0061] hover:bg-[#27003F] btn border-[#212529]  text-[#F8F9FA] font-bold leading-7 px-5 py-2 rounded-md font-dirooz">
          ورود به حساب
        </button>
      </div>
    </div>
  );
}
