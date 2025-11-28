import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="mt-24 w-full flex justify-center font-dirooz">
      <div className="flex justify-center w-fit gap-5 p-5 border border-[#212529] rounded-xl">
        <div className="w-[350px] p-px h-[312] flex justify-center items-center rounded-xl bg-linear-to-b from-[#343A40] to-[#080808]">
          <div className=" w-[350px] h-[311px] bg-[#080808] flex flex-col items-center overflow-hidden rounded-xl">
            <Image
              src="/images/30886a978743495613a7f8201c8c84ca1204843c.png"
              height={116}
              width={224}
              alt="Fasi"
              style={{
                filter:
                  "drop-shadow(90px -20px 60px rgba(255,149,10,0.1)) drop-shadow(-90px -20px 60px rgba(255,149,10,0.1)) drop-shadow(0px 10px 60px rgba(255,149,10,0.1)) drop-shadow(0px -10px 20px rgba(255,149,10,0.1)) drop-shadow(-60px -10px 45px rgba(255,149,10,0.1)) drop-shadow(60px -10px 45px rgba(255,149,10,0.1))",
              }}
            />
            <h1 className="font-black text-[24px] tracking-[0.4px] leading-7 text-[#FFFFFF]">
              پشتیبانی ۲۴/۷
            </h1>
            <p className="font-bold text-[18px] w-[300px] leading-7 mt-3 text-center text-[#6C757D]">
              همیشه آماده پاسخ به مشتریان بر اساس دانش اختصاصی
            </p>
            <button className="font-bold mt-3 text-[15px] leading-7 text-[#F8F9FA] flex justify-center items-center w-[108px] h-7 border border-[#212529] rounded-md">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
        <div className="w-[350px] p-px h-[312] flex justify-center items-center rounded-xl bg-linear-to-b from-[#343A40] to-[#080808]">
          <div className=" w-[350px] h-[311px] bg-[#080808] flex flex-col items-center rounded-xl overflow-hidden ">
            <Image
              src="/images/846e7fd01ed30378eca5ee9bb831aed61be6f644.png"
              height={116}
              width={224}
              alt="Fasi"
              style={{
                filter:
                  "drop-shadow(90px -20px 60px rgba(255,55,95,0.1)) drop-shadow(-90px -20px 60px rgba(255,55,95,0.1)) drop-shadow(0px 10px 60px rgba(255,55,95,0.1)) drop-shadow(0px -10px 20px rgba(255,55,95,0.1)) drop-shadow(-60px -10px 45px rgba(255,55,95,0.1)) drop-shadow(60px -10px 45px rgba(255,55,95,0.1))",
              }}
            />
            <h1 className="font-black text-[24px] tracking-[0.4px] leading-7 text-[#FFFFFF]">
              ادغام آسان
            </h1>
            <p className="font-bold text-[18px] w-[300px] leading-7 mt-3 text-center text-[#6C757D]">
              دستیار را با سایت یا اپلیکیشن‌تان یکپارچه کنید، بدون پیچیدگی.
            </p>
            <button className="font-bold mt-3 text-[15px] leading-7 text-[#F8F9FA] flex justify-center items-center w-[108px] h-7 border border-[#212529] rounded-md">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
        <div className="w-[350px] p-px h-[312] flex justify-center items-center rounded-xl bg-linear-to-b from-[#343A40] to-[#080808]">
          <div className=" w-[350px] h-[311px] bg-[#080808] flex flex-col items-center rounded-xl overflow-hidden">
            <Image
              src="/images/e0f7636298f1d2cf256726dfa7ab4738286750ac.png"
              height={116}
              width={224}
              alt="Fasi"
              style={{
                filter:
                  "drop-shadow(90px -20px 60px rgba(191,90,242,0.1)) drop-shadow(-90px -20px 60px rgba(191,90,242,0.1)) drop-shadow(0px 10px 60px rgba(191,90,242,0.1)) drop-shadow(0px -10px 20px rgba(191,90,242,0.1)) drop-shadow(-60px -10px 45px rgba(191,90,242,0.1)) drop-shadow(60px -10px 45px rgba(191,90,242,0.1))",
              }}
            />
            <h1 className="font-black text-[24px] tracking-[0.4px] leading-7 text-[#FFFFFF]">
              سفارشی‌سازی کامل
            </h1>
            <p className="font-bold text-[18px] w-[300px] leading-7 mt-3 text-center text-[#6C757D]">
              اطلاعات برندتان را وارد کنید و دستیاری منحصربه‌فرد بسازید.
            </p>
            <button className="font-bold mt-3 text-[15px] leading-7 text-[#F8F9FA] flex justify-center items-center w-[108px] h-7 border border-[#212529] rounded-md">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
