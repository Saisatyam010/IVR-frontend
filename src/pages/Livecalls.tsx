import { BiRefresh } from "react-icons/bi";
import {  getLivecalls } from "../api/liveCalls";
import { useEffect, useState } from "react";
import api from "../services/api";
export default function Livecalls() {
    const [liveCalls, setLiveCalls] = useState([{}])
   

    const livedat = async () => {
        const res = await getLivecalls()
        console.log( res+"tyt");
        setLiveCalls(res.calls.filter((call:any)=>call.parentCallSid!==null))
        
    }
    
    useEffect(() => {
        
    let stop = setInterval(()=>{
            livedat();
        },4000)
        return ()=>{
            clearInterval(stop)
        }
    }, [])
    return (
        <>
            <p className="font-bold text-[30px] pb-4 ms-2">
                Live Calls
            </p>
            <div className="dark:border-strokedark dark:bg-boxdark rounded-xl rounded-xl bg-white shadow-md">
                <div className="flex p-2">
                    <div className="ms-3">

                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3 plaecholder:text-" placeholder="Select Campaign" />
                    </div>

                    <div className="ms-3">

                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" placeholder="Select DID" />
                    </div>

                    <div className="ms-3">

                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" placeholder="Select Buyer" />
                    </div>

                    <button className=" ms-[80px] inline-flex items-center justify-center bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Search
                    </button>
                    <button className="inline-flex items-center justify-center bg-[#8A99AF] ms-4 py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Reset
                    </button>

                    <button className="inline-flex items-center justify-center bg-[#8A99AF] ms-4 py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Refresh
                    </button>
                </div>

                <div className="mt-4 text-center mb-5 p-2 flex items-center justify-center">
                    <button className="mt-1">
                        <BiRefresh className="text-2xl" />
                    </button>
                    <button className="text-2xl font-bold text-primary">
                        Auto Refresh
                    </button>

                </div>
            </div>


            <div className="relative overflow-x-auto dark:border-strokedark dark:bg-boxdark rounded-xl bg-white shadow-md mt-5">
                <p className="ms-4 mt-5">
                    <span>Show</span>

                </p>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr className="">
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Campaign
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Did
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Buyer
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Target Number
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Caller Id
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Duration
                            </th>
                            <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                                Hangup
                            </th>
                        </tr>
                    </thead>
                    <tbody className="dark:border-strokedark dark:bg-boxdark">
                        {liveCalls.length > 0 && liveCalls?.map((call: any) =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:border-strokedark dark:bg-boxdark">
                                    {/* Publisher */}
                                </th>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {call?.forwardedFrom}
                                </td>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {/* {} */}
                                </td>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {call?.to}
                                </td>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {call?.from}
                                </td>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {/* N/A */}
                                </td>
                                <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                    {/* N/A */}
                                </td>
                            </tr>
                        )}
                        {liveCalls.length == 0 && <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">
                            <td colSpan={9} scope="col" className="px-6 py-3 text-center dark:border-strokedark dark:bg-boxdark dark:text-white">No Calls Avaiable</td>
                        </tr>}
                    </tbody>
                </table>
            </div>


        </>
    )
} 