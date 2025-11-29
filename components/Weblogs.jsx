import React from "react";

export default function Weblogs() {
  return (
    <div className="flex w-full text-[40px] flex-col items-center mt-[100px]">
      <h1 className="font-bold font-dirooz mb-5  bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent ">
        وبلاگ ها
      </h1>

      <div className="flex w-full gap-[30px] justify-center mt-6 ">
        <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
          <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
          <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
            یک متن آزمایشی خبر در اینجا قرار گرفته است.
          </p>
        </div>
        <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
          <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
          <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
            یک متن آزمایشی خبر در اینجا قرار گرفته است.
          </p>
        </div>
        <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
          <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
          <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
            یک متن آزمایشی خبر در اینجا قرار گرفته است.
          </p>
        </div>
      </div>
      <button className="bg-[#BF5AF2] mt-10 font-dirooz w-52 h-10 text-[#F8F9FA] font-bold text-[18px] rounded-md border border-[#212529]">
        مشاهده تمامی وبلاگ ها
      </button>
    </div>
  );
}
