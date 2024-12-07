import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Notification() {
  return (
    <div className="flex gap-2 w-full p-2 border items-center">
      <Image
        className="w-10 h-10 p-2 rounded-full xl:p-4"
        width={30}
        height={30}
        src="/icon/email.png"
        alt="dos_email"
      />

      <div className="flex flex-col grow">
        <p className="text-xs font-semibold md:text-base text-baseliteblue">
          বিজ্ঞপ্তি শিরোনাম এখানে
        </p>
        <span className="text-xs py-1 font-semibold">10/7/2024 , 10:30 AM</span>
      </div>

      <div className="">
        <button className="bg-red-500 rounded text-sm py-1 px-2 md:px-4 md:rounded-md text-white font-bold">
          বন্ধ করা
        </button>
      </div>
    </div>
  );
}
