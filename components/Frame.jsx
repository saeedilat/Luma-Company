import Image from "next/image";
import React from "react";

export default function Frame() {
  return (
    <div className="flex w-full text-[40px] flex-col items-center mt-[100px]">
      <h1 className="font-bold font-dirooz  bg-linear-to-r from-[#DA8FFF] via-[#FF6482] to-[#FFB340] bg-clip-text text-transparent ">
        همکار دیجیتال خود را خلق کنید
      </h1>
      <div className="w-full flex justify-evenly items-center mt-[50px]">
        <Image
          src="/images/252924a970763c04985e860fc0e0c4b393aa35e4.png"
          width={260}
          height={355}
          alt="exchenge"
          className="cursor-pointer transition-transform duration-300 hover:scale-125"
        />
        <Image
          src="/images/582ff286ebe62c1ca86e1aa1e3aed96d0afb0967.png"
          width={260}
          height={355}
          alt="motion"
          className="cursor-pointer transition-transform duration-300 hover:scale-125"
        />
        <Image
          src="/images/50d9b7233e6ac2354c5ac65f5b60ec886671e17c.png"
          width={260}
          height={355}
          alt="lampa"
          className="cursor-pointer transition-transform duration-500 hover:scale-125"
        />
      </div>
    </div>
  );
}
