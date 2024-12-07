'use client'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function SetSchedule() {

  const [ Select , setSelectDate ] = React.useState(null)

    const shedule = [
        {exam_type:'1st Class Masters' , jan:'28',feb:'0',march:'0',apr:'24',may:'0',june:'0',july:'24',aug:'0',sep:'0',oct:'21',nov:'0',dec:'08' },
        {exam_type:'2nd Class Masters' , jan:'0',feb:'0',march:'0',apr:'0',may:'20',june:'0',july:'0',aug:'0',sep:'9',oct:'0',nov:'0',dec:'0' },
        {exam_type:'3rd Class Masters' , jan:'0',feb:'0',march:'0',apr:'24',may:'0',june:'0',july:'0',aug:'0',sep:'0',oct:'21',nov:'0',dec:'08' },
        {exam_type:'Sukani' , jan:'0',feb:'0',march:'0',apr:'24',may:'0',june:'7',july:'0',aug:'0',sep:'9',oct:'0',nov:'0',dec:'0' },
        {exam_type:'Karnofuli Endorsement ' , jan:'1',feb:'6',march:'9',apr:'0',may:'0',june:'23',july:'0',aug:'0',sep:'0',oct:'7',nov:'0',dec:'0' }, 
        {exam_type:'Pashur Endorsement ' , jan:'4',feb:'0',march:'0',apr:'24',may:'0',june:'0',july:'24',aug:'0',sep:'0',oct:'21',nov:'0',dec:'04' }
    ]
  return (
    <div className='bg-white'>
           <div className={`relative`}>
        <p className='bg-otpHeader font-bold p-2 text-center'>Set Shedule</p>
        </div>


       <div className="overflow-auto">
       <table className='w-full text-xs font-semibold  md:text-sm text-center md:font-bold'>
           <thead>
             <tr className=''>
                <td className='border border-gray-400 p-2 '>SL. NO.</td>
                <td className='border border-gray-400 p-2 text-left'>Exam Type</td>
                <td className='border border-gray-400 p-2 '>Jan 24</td>
                <td className='border border-gray-400 p-2 '>Feb24 </td>
                <td className='border border-gray-400 p-2 '>Mar24 </td>
                <td className='border border-gray-400 p-2 '>Apr24 </td>
                <td className='border border-gray-400 p-2 '>May24 </td>
                <td className='border border-gray-400 p-2 '>June24 </td>
                <td className='border border-gray-400 p-2 '>July24 </td>
                <td className='border border-gray-400 p-2 '>Aug24 </td>
                <td className='border border-gray-400 p-2 '>Sep24 </td>
                <td className='border border-gray-400 p-2 '>Oct24 </td>
                <td className='border border-gray-400 p-2 '>Nov24 </td>
                <td className='border border-gray-400 p-2 '>Dec24 </td>
             </tr>
           </thead>

           <tbody>
           
           
          
           {
            shedule.map( (item ,index )=> (
                <tr key={index}>
                <td  className='border border-gray-400 p-2'>{index + 1  }</td>
                <td className='border border-gray-400 p-2 text-left'>{item.exam_type}</td>
                <td className='border border-gray-400 '>
                    {item?.jan > 0 ?  <span className={`${Select === item.exam_type+item.jan ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.jan)}>{item?.jan}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                    {item?.feb > 0 ?  <span className={`${Select === item.exam_type+item.feb ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer w-10 mx-auto block  `} onClick={() => setSelectDate(item.exam_type+item.feb)}>{item?.feb}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                    { item?.march > 0 ?  <span className={`${Select === item.exam_type+item.march ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer w-10 mx-auto block  `} onClick={() => setSelectDate(item.exam_type+item.march)}>{item?.march}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.apt > 0 ?  <span className={`${Select === item.exam_type+item.apt ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.apt)}>{item?.apr}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.may > 0 ?  <span className={`${Select === item.exam_type+item.may ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer w-10 mx-auto block  `} onClick={() => setSelectDate(item.exam_type+item.may)}>{item?.may}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.june > 0 ?  <span className={`${Select === item.exam_type+item.june ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer w-10 mx-auto block  `} onClick={() => setSelectDate(item.exam_type+item.june)}>{item?.june}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.july > 0 ?  <span className={`${Select === item.exam_type+item.july ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer w-10 mx-auto block  `} onClick={() => setSelectDate(item.exam_type+item.july)}>{item?.july}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.aug > 0 ?  <span className={`${Select === item.exam_type+item.aug ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.sep)}>{item?.aug}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.sep > 0 ?  <span className={`${Select === item.exam_type+item.sep ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.sep)}>{item?.sep}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.oct > 0 ?  <span className={`${Select === item.exam_type+item.oct ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.oct)}>{item?.oct}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.nov > 0 ?  <span className={`${Select === item.exam_type+item.nov ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.nov)}>{item?.nov}</span> : ''}
                </td>
                <td className='border border-gray-400 p-2'>
                {item?.dec > 0 ?  <span className={`${Select === item.exam_type+item.dec ? "bg-green-600" : ""} bg-red-300 text-gray-900 px-3 py-1 rounded cursor-pointer  w-10 mx-auto block `} onClick={() => setSelectDate(item.exam_type+item.dec)}>{item?.dec}</span> : ''}
                </td>
            </tr>
            ))
           }
           </tbody>
        </table>
       </div>

    </div>
  )
}
