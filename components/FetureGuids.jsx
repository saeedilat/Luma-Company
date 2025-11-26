import React from "react";
import Blobs from "./Blobs";

export default function FetureGuids() {
  return (
    <div className="mt-3 font-dirooz font-bold text-[30px]">
      <div className="w-full flex  flex-col items-center">
        <Blobs />
        <h1 className=" bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent">
          قبل از استفاده حتما باید مطالعه کنید
        </h1>
        <div className="flex w-full gap-[30px] justify-center mt-6 ">
          <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
            <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
            <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
              چگونه با کمک ساخت تصاویر مشابه ، تصاویر با کیفیتی تولید کنیم ؟
            </p>
          </div>
          <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
            <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
            <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
              شما مالک تمامی تصاویر هستید ! وقتی به ابزار ساخت تصویر مشابه
              دسترسی دارید.
            </p>
          </div>
          <div className="w-[360px] h-[285px] bg-[rgba(0,0,0,0.12)] rounded-lg p-3 border border-[rgba(248,249,250,0.09)]">
            <div className="bg-[#212529] w-full h-[212px] rounded-lg"></div>
            <p className="font-dirooz font-bold text-[15px] mt-2 text-[#F8F9FA]">
              ایده های متن به تصویر خود را با تصاویر مشابه گسترش دهید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
