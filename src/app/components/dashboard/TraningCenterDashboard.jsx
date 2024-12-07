import React from 'react'
import profile from "@public/avatar/jhonDoe.png"
import Image from 'next/image'

function TraningCenterDashboard() {
 

    const dataCourse={
        title:'this is title',
        data:[
            {
                name:' ডেমো ',
                value:"১২৩"
            },  {
                name:' ডেমো ',
                value:"১২৩"
            } , {
                name:' ডেমো ',
                value:"১২৩"
            } , {
                name:' ডেমো ',
                value:"১২৩"
            } , {
                name:' ডেমো ',
                value:"১২৩"
            }
        ]
    }
    const reqapproval = [
        {
            name:'ডেমো ',
            value:"১২৩"
        },  {
            name:'ডেমো ',
            value:"১২৩"
        } , {
            name:'ডেমো ',
            value:"১২৩"
        } , {
            name:'ডেমো ',
            value:"১২৩"
        } , {
            name:'ডেমো ',
            value:"১২৩"
        }
    ]

    return (
        <section className="flex flex-col gap-5 bg-white min-h-screen">
           
           <div className="flex flex-col gap-4 border p-4 rounded">
            <div className=" flex flex-col gap-4 text-center text-white  w-full md:flex-row">
                <div className="bg-[#4674C2 bg-blue-500 grow  p-2 rounded">
                    <p className="p-2">প্রশিক্ষক</p>
                    <p className="pb-2 text-xl font-bold">00</p>
                </div>
                <div className="bg-[#FFD3B4 bg-teal-500 grow p-2  rounded">
                    <p className="p-2"> কোর্স</p>
                    <p className="pb-2 text-xl font-bold">00</p>
                </div>
                <div className="bg-[#98DDCA bg-indigo-500 grow p-2  rounded">
                    <p className="p-2"> ব্যাচ</p>
                    <p className="pb-2 text-xl font-bold">00</p>
                </div>
                <div className="bg-[#E0DEF4 bg-rose-500 grow  p-2 rounded">
                    <p className="p-2">সার্টিফিকেট অর্জন</p>
                    <p className="pb-2 text-xl font-bold">{new Intl.NumberFormat("bn-BD").format(1)}</p>
                </div>
            </div>
            
            {/* <div className=''>
                <p className='py-2 font-bold'>নতুন প্রশিক্ষকের তালিকা </p>
                <table className='w-full border'>
                    <thead className='bg-otpHeader'>
                        <th className='p-2'>
                        নাম
                        </th>
                        <th>
                        ছবি
                        </th>
                        <th>
                        ফোন
                        </th>
                        <th>
                        ইমেইল
                        </th>
                        <th>
                        পদমর্যাদা
                        </th>
                        <th>
                        শ্রেণী
                        </th>
                        <th>
                        সার্টিসিফিকেশন নং
                        </th>
                    </thead>
                    <tbody className='divide-y text-sm'>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                        <tr className='text-center '>
                            <td>Sample Name</td>
                             <td className='flex justify-center'>
                                <div className="relative w-12 h-12 p-3">
                                <Image src={profile} fill className='rounded-full p-2' alt="profile picture"/>
                                
                                </div>
                             </td>
                             <td>0174514812</td>
                           
                            <td>email@gamil.com</td>
                            <td>73</td>
                            <td>2</td>
                            <td>2542254</td>
                           
                        </tr>
                      
                        
                    </tbody>
                </table>

            </div> */}
<div className="flex flex-col md:flex-row md:gap-6 xl:mt-6">
    
<div className="flex gap-4 flex-1">
            <CourseStudent title="কোর্স অনুযায়ী সর্বোচ্চ ছাত্র " data={dataCourse.data}/>
            <CourseStudent title="কোর্স অনুযায়ী সর্বনিম্ন ছাত্র" data={dataCourse.data}/>
            </div>
            <div className="flex-1">
            <CourseStudent title="অনুমোদনের জন্য অনুরোধ" data={reqapproval}/>
            </div>
            
</div>
            
            <div className=" flex gaap-4">
                <div className=""></div>
            </div>
           </div>
        </section>
        
    )
}

const requestForApproval =() => {
    return{
        
    }
}
const DosNoIssued =() => {
    return{

    }
}

const CourseStudent =({data,title}) => {
    return (
        <div className="flex flex-col w-full rounded border-gray-300 border p-4 shadow">
            <h1 className='text-gray-700 py-1  pb-3 text-center'>{title}</h1>
            <hr />
            {data?.map((item,index) =>(
                <div key={index} className="p-2 flex justify-between pt-3">
                <p className='text-gray-600'>{item?.name}</p>
                <p className='font-bold '>{item?.value}</p>
               </div>
            ) )}
            
        </div>
    )
}


export default TraningCenterDashboard
