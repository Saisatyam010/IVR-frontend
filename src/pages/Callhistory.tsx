import { useEffect, useState } from "react"
import api from "../services/api"
import { DateRangePicker } from 'react-date-range';
export default function Callhistory () {
    const [callHistory,setCallHistory]=useState<any[]>([])
   const handleSelect=(ranges:any)=>{
            console.log(ranges);
            // {
            //   selection: {
            //     startDate: [native Date Object],
            //     endDate: [native Date Object],
            //   }
            // }
          }
    const fetchCallHistory=async()=>{
        const res=await api.get('/auth/call-history',{headers:{
            'Content-type':"application/json"
        }})
        console.log(JSON.stringify(res.data)+"data")
        if(res.status==200)
        setCallHistory(res.data.callHistory.filter((call:any)=>call.parentCallSid!=null))
    }
    useEffect(()=>{
        fetchCallHistory();
    },[])
    function calculateDuration(startTimestamp:string, endTimestamp:string) {
        const startDate:any = new Date(startTimestamp);
        const endDate:any = new Date(endTimestamp);
      
        // Calculate the time difference in milliseconds
        const timeDifference = endDate - startDate;
      
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
        return {
          hours,
          minutes,
          seconds
        };
      }
      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
    return (
        <>

<p className="font-bold text-[30px] pb-4 ms-2">
    Call History
</p>
            <div className="dark:border-strokedark dark:bg-boxdark rounded-xl rounded-xl bg-white shadow-md">
                <div className="flex p-2">
                    <div className="ms-3 relative">
                        <label className="font-bold ms-2 dark:text-white">Date Range</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                         <div className="absolute top-0 left-0">
                         <DateRangePicker
                           ranges={[selectionRange]}
                           onChange={handleSelect}
                       />
                         </div>
                    </div>

                    <div className="ms-3">
                        <label className="font-bold ms-2 dark:text-white">Call Status</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>

                    <div className="ms-3">
                        <label className="font-bold ms-2 dark:text-white">Caller Number</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>

                    <div className="ms-3">
                        <label className="font-bold ms-2 dark:text-white">DID</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>

                    <div className="ms-3">
                        <label className="font-bold ms-2 dark:text-white">Destination</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                </div>

                <p className="mt-4 text-center mb-5 p-2">
                    <button className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Search
                    </button>
                    <button className="inline-flex items-center justify-center bg-[#8A99AF] ms-4 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Reset
                    </button>
                </p>
            </div>


            <div className="relative overflow-x-auto dark:border-strokedark dark:bg-boxdark rounded-xl bg-white shadow-md mt-5">
                <p className="ms-4 mt-5">
                <button className="inline-flex items-center justify-center text-xs bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 xl:py-4  rounded-l-[10px]"  >
                        CSV
                    </button>
                    <button className="inline-flex items-center justify-center bg-[#8A99AF] text-xs bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 xl:py-4  "  >
                    EXCEL
                    </button>
                    <button className="inline-flex items-center justify-center bg-primary text-xs bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 xl:py-4 "  >
                    PDF
                    </button>
                    <button className="inline-flex items-center justify-center bg-[#8A99AF] text-xs bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10  rounded-r-[10px] xl:py-4"  >
                        Print
                    </button>
                </p>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr className="">
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Start Time
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                End Time
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                SRC
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                DID
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Buyer
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Destination
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Campaign
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Call Status
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Duration
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody className="dark:border-strokedark dark:bg-boxdark">
                        {callHistory.length>0&&callHistory.map(call=>{
                        const duration=calculateDuration(call.startTime,call.endTime)
                        return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:border-strokedark dark:bg-boxdark">
                               {call.startTime}
                            </th>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                            {call.endTime}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                            {call.forwardedFrom}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                            {call.to}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                            {call.from}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                               N/A
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                            {call.status}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                             {duration.hours>0&&`${duration.hours} hours,`}{duration.minutes>0&&`${duration.minutes}  minutes,`} {duration.seconds} seconds`
                            </td>
                           
                        </tr>
                        )})}
                    </tbody>
                </table>
            </div>


        </>
    )
} 