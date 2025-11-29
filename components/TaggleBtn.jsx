"use client";
import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function TaggleBtn() {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <div
      className="w-20 h-10 rounded-[86px] bg-[#3C0061] relative"
      onClick={darkMode}
    >
      {dark ? (
        <MdOutlineWbSunny className="w-6 h-6 text-[#FFFFFF] absolute left-12 top-[7.83px]" />
      ) : (
        <FaRegMoon className="w-6 h-6 text-[#FFFFFF] absolute left-2.5 top-[7.83px]" />
      )}
      <div
        className={`${
          dark ? "left-0.5" : "left-[41px]"
        } w-[35px] h-[35px] rounded-full bg-[#FFFFFF] absolute  top-[2.83px] duration-300`}
      ></div>
    </div>
  );
}
