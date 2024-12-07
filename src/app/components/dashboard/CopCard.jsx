import React from "react";

export default function AdminCard({ details }) {
  return (
    <div className="flex flex-col bg-white grow">
      <div className={`${details.background} p-3`}>
        <p className="text-white">{details.name}</p>
      </div>

      {/* cop grapho */}
      <div className="p-2 h-48 text-center text-5xl flex items-center justify-center">
        {details.result}
      </div>

      {/* bottom nav of cop  */}
      <div className="flex justify-around py-4">
        <div className="flex flex-col items-center font-semibold">
          <p className="">{details.total}</p>
          <span className="text-xs">মোট</span>
        </div>

        <div
          className={`${
            details?.pending ? " text-red-500" : "hidden"
          } flex flex-col items-center font-bold`}
        >
          <p className=" ">{details?.pending}</p>
          <span className="text-xs">বিবেচনাধীন</span>
        </div>

        <div
          className={`${
            details?.done ? " text-green-500" : "hidden"
          } flex flex-col  items-center font-bold`}
        >
          <p className=" ">{details?.done}</p>
          <span className="text-xs">সম্পন্ন</span>
        </div>
      </div>
    </div>
  );
}
