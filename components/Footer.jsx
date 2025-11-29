import React from "react";
import Link from "next/link";
import { RiTelegram2Fill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="w-full text-[#FFFFFF] font-dirooz  flex flex-col h-[570px] mt-40 relative border-t bg-[#080808] overflow-hidden"
      style={{
        borderImage: "linear-gradient(to right,#DA8FFF,#FF6482,#FFB340)1",
      }}
    >
      <div className="w-full flex justify-center ">
        <div className="w-[237px] mt-10 pr-10">
          <p className="font-medium text-[35px] mb-5"> لینک‌های مهم</p>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            راهکارها
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            سرویس ها
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            منابع
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            قیمت
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            وبلاگ
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            حریم خصوصی
          </Link>
          <Link href="/" className="text-[18px] block mb-5 font-bold">
            قوانین ومقررات
          </Link>
        </div>
        <div className="w-[645px] mt-10 pr-32">
          <p className="font-medium text-[35px] mb-5"> اطلاعات تماس</p>
          <p className="text-[18px] font-bold mb-5">
            آدرس دفتر مرکزی : تهران ، خیابان سهروردی شمالی، خیابان کوشش، پلاک
            35، واحد 7
          </p>
          <p className="text-[18px] font-bold mb-5">
            شماره تماس دفتر تهران : 02188511051
          </p>
          <p className="text-[18px] font-bold mb-5">
            آدرس دفتر نرم افزاری : بابلسر ، بلوار پاسداران ، پاسداران 24 ،
            ساختمان ترنم طبقه -1
          </p>
          <p className="text-[18px] font-bold mb-5">
            شماره تماس دفتر بابلسر : 35279771
          </p>
          <p className="text-[18px] font-bold mb-5">
            ایمیل پشتیبانی : support@lumai.ir
          </p>
          <div>
            <p className="text-[18px] font-bold mb-5">شبکه های اجتماعی: </p>
            <div className="text-[18px] flex gap-5">
              <LuInstagram className="w-10 h-10" />
              <RiTwitterXLine className="w-10 h-10" />
              <RiTelegram2Fill className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div className="w-[415px] mt-10 pr-16">
          <p className="font-medium text-[35px] mb-5"> مجوز های رسمی</p>
          <div className="flex gap-10">
            <Image
              src="/images/91178b5aeb1020079e80cef69535ef87fa50061a.png"
              width={80}
              height={80}
              alt="enamad"
            />
            <Image
              src="/images/95f9f6186dd47e4140ec3817ed182fdd65bdce06.png"
              width={80}
              height={80}
              alt="zarinpal"
            />
            <div className="bg-[#212529] w-20 h-[115px]"></div>
          </div>
        </div>
        <div className="w-[500px] h-[500px] -top-[152px] rounded-full absolute right-[30%]  bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] filter blur-[750px]"></div>
      </div>
      <p className="w-full justify-center flex mt-10 text-[#6C757D] text-[16px] font-semibold">
        تمامی حقوق این سایت متعلق به نبیولا است.
      </p>
    </div>
  );
}
