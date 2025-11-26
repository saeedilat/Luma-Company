import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className=" flex justify-evenly w-full h-80 mt-16">
      <div className="w-[455px] h-[334px] flex flex-col items-start">
        <h1 className="bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent text-[30px] font-dirooz font-bold leading-16">
          هوش مصنوعی، سفارشی برای شما!
        </h1>
        <p className="text-[#ADB5BD] font-bold text-[18px] font-dirooz ">
          با این سرویس، شما می‌توانید یک دستیار هوش مصنوعی اختصاصی بسازید که با
          استفاده از اطلاعات برند، محتوای سایت، یا داده‌های شخصی‌سازی‌شده شما
          شکل می‌گیرد، پاسخ‌های دقیق و هوشمند به سؤالات مشتریان ارائه دهد،
          پشتیبانی مداوم به‌صورت ۲۴ ساعته فراهم کند، و به‌راحتی با پلتفرم‌ها و
          وب‌سایت‌های مختلف ادغام شود تا تجربه کاربری منحصربه‌فردی برای شما و
          مخاطبانتان ایجاد کند.
        </p>
        <button className="w-[137] h-10 bg-[#BF5AF2] rounded-md relative top-2 border-[#212529] font-bold text-[18px] flex justify-center items-center font-dirooz text-[#F8F9FA]">
          شروع به چت
        </button>
      </div>
      <div className="w-[500px] relative">
        <Image
          src="/images/39545a511e3d5884fbf957aa9d7df473654589c6.png"
          width={500}
          height={100}
          alt="AI"
          className="rounded-lg"
        />
        <div className="absolute -bottom-2 flex justify-evenly w-full">
          <div className="w-[115px] h-2 bg-[rgba(248,249,250,0.09)] rounded-full"></div>
          <div className="w-[115px] h-2 bg-[rgba(248,249,250,0.09)] rounded-full"></div>
          <div className="w-[115px] h-2 bg-[rgba(248,249,250,0.09)] rounded-full"></div>
          <div className="w-[115px] h-2 bg-[rgba(248,249,250,0.09)] rounded-full flex justify-end">
            <div className="w-[59px] h-2 bg-[#F8F9FA] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
