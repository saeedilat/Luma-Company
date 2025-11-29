import React from "react";

export default function CaseStudy() {
  return (
    <div className="flex flex-col items-center w-full mt-[150px]">
      <h1 className="font-medium text-[30px] font-dirooz  bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent">
        با دستیار هوش مصنوعی سفارشی لوما، پشتیبانی و راهنمایی اختصاصی لحظه‌ای
        برای شما!
      </h1>
      <div className="mt-5 rounded-md overflow-hidden">
        <video
          src="/videos/Comp 1.mp4"
          controls
          preload="metadata"
          className="h-[535px]"
        />
      </div>
      <div className="mt-8 flex gap-5">
        <button className="bg-[#BF5AF2] font-dirooz w-52 h-10 text-[#F8F9FA] font-bold text-[18px] rounded-md border border-[#212529] hover:bg-[#9345BA] btn">
          درخواست دموی رایگان
        </button>
        <button className="bg-[#BF5AF2] font-dirooz w-[109px] h-10 text-[#F8F9FA] font-bold text-[18px] rounded-md border border-[#212529] hover:bg-[#9345BA] btn">
          راهکار ها
        </button>
      </div>
    </div>
  );
}
