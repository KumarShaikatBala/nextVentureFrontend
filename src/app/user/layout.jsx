import SideNav from "@/app/layouts/SideNav";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative">
      <SideNav />
      <div className="bg-[#0000001a] min-h-screen sm:ml-64 print:p-0 print:mb-0 print:sm:ml-0">
        <div className="rounded-lg mt-[73px]  print:mt-0">{children}</div>
      </div>

      <div className=" sm:ml-64 bottom-0 border-t print:hidden">
        <div className="flex shadow-footer bg-yellow-50 flex-col gap-y-5 items-center justify-between  px-10 py-5 gap-2 md:py-2 md:gap-0 p-1  md:flex-row xl:px-5">
          <div>
            <p className="text-baseblue text-xs py-1">
              Copyright © Shaikat
            </p>
          </div>
          <div className="flex flex-col items-center justify-center content-center gap-2 md:flex-row md:items-center md:gap-3 py-1">
            <p className="text-baseblue font-inter font-normal text-xs py-1  ">
            Design And Developed By
            </p>
            <div className="max-w-[140px]  xl:mb-2 xl:w-[90px] 2xl:max-w-[141px] -mt-2 ">
      Shaikat
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
