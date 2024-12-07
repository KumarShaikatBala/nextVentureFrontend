import React from 'react'

function SurveyOfficeDashboard() {
  return (
    <div className='bg-white min-h-screen p-6'>
      <div className=" flex flex-col gap-4 text-center text-white  w-full md:flex-row">
                <div className="bg-[#4674C2 bg-blue-500 grow  p-2 rounded">
                    <p className="p-2">প্রশিক্ষক</p>
                    <p className="pb-2 text-xl font-bold">00</p>
                </div>
                <div className="bg-[#FFD3B4 bg-teal-500 grow p-2  rounded">
                    <p className="p-2"> মাসে মোট রেকর্ড এন্ট্রি</p>
                    <p className="pb-2 text-xl font-bold">{new Intl.NumberFormat("bn-BD").format(10)}</p>
                </div>
                <div className="bg-[#98DDCA bg-indigo-500 grow p-2  rounded">
                    <p className="p-2">মোট রেকর্ড এন্ট্রি</p>
                    <p className="pb-2 text-xl font-bold">{new Intl.NumberFormat("bn-BD").format(100)}</p>
                </div>
                <div className="bg-[#E0DEF4 bg-rose-500 grow  p-2 rounded">
                    <p className="">সর্বশেষ রেকর্ড এন্ট্রি</p>
                    <div className="flex text-black justify-around">
                    <p className="text-sm">১ ঘণ্টা আগে</p>
                    <p className="text-sm font-bold">এম.ভি এস মোলস্না</p>
                    </div>
                    <div className="flex text-black justify-around">
                    <p className="text-sm">নাবিক</p>
                    <p className="text-sm font-bold">{new Intl.NumberFormat("bn-BD").format(5)} জন</p>
                    </div>
                    {/* <p className="pb-2 text-xl font-bold">{new Intl.NumberFormat("bn-BD").format(1)}</p> */}
                </div>
            </div>
    </div>
  )
}

export default SurveyOfficeDashboard