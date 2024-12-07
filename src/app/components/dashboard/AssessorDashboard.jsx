import React from "react";

function AssessorDashboard() {
  return (
   <div className="p-6 bg-white h-screen space-y-6">
     <div className="">
      <div className=" flex flex-col gap-4 text-center text-white  w-full md:flex-row">
        <div className="bg-[#4674C2 bg-blue-500 grow  p-2 rounded">
          <p className="p-2">মোট এপ্লিকেশন</p>
          <p className="pb-2 text-xl font-bold"> {new Intl.NumberFormat("bn-BD").format(2000)}</p>
        </div>
        <div className="bg-[#FFD3B4 bg-teal-500 grow p-2  rounded">
          <p className="p-2">সর্বশেষ এপ্লিকেশন</p>
          <p className="pb-2 text-xl font-bold">
            {new Intl.NumberFormat("bn-BD").format(10)}
          </p>
        </div>
        <div className="bg-[#98DDCA bg-indigo-500 grow p-2  rounded">
          <p className="p-2">মোট অনুমোদিত এপ্লিকেশন</p>
          <p className="pb-2 text-xl font-bold">
            {new Intl.NumberFormat("bn-BD").format(100)}
          </p>
        </div>
        <div className="bg-[#E0DEF4 bg-rose-500 grow  p-2 rounded">
          <p className="p-2">সর্বশেষ অনুমোদিত এপ্লিকেশন</p>
          <p className="pb-2 text-xl font-bold">
            {new Intl.NumberFormat("bn-BD").format(100)}
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white flex gap-2">
       <div className="p-6 border rounded space-y-5">
        <p className="font-bold opacity-70">প্রোফাইল সম্পূর্ণ</p>
           <div className="bg-gray-400 w-32 h-32 rounded-full  flex justify-center items-center">
             <div className="w-28 h-28 bg-white rounded-full  flex justify-center items-center">
              <p className="text-2xl font-semibold">100%</p>
             </div>
           </div>
       </div>
       <div className="p-6 border rounded space-y-5">
        <p className="font-bold opacity-70">সর্বশেষ প্রোফাইল আপডেট</p>
         <div className="space-y-1 text-sm opacity-60">
         <p >তারিখ : 10/12/2024 </p>
         <p >নাম : পরিবর্তিত নাম </p>
         
         </div>
       </div>
    </div>
   </div>
  );
}

export default AssessorDashboard;
