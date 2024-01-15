import React, { useEffect, useState } from 'react'
import { getLivecalls } from '../api/liveCalls'
import { getAllRecording } from '../api/CallRecording'
import { Link } from 'react-router-dom'

const CallRecording = () => {

    const [liveCalls, setLiveCalls] = useState([{}])


    const livedat = async () => {
        const res = await getAllRecording()
        console.log(res + "tyt");
        setLiveCalls(res.recordings)

    }
const downloadPdf =(url:any)=>{
    const audioUrl = url;
    
     
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'audioFile.mp3';  
    document.body.appendChild(link);

     
    link.click();

   
    document.body.removeChild(link);
}
    useEffect(() => {
        livedat()
        // let stop = setInterval(()=>{
        //         livedat();
        //     },4000)
        //     return ()=>{
        //         clearInterval(stop)
        //     }
    }, [])
    return (
        <div className="relative overflow-x-auto dark:border-strokedark dark:bg-boxdark rounded-xl bg-white shadow-md mt-5">
            <p className="ms-4 mt-5">
                <span>Show</span>

            </p>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr className="">
                        <th scope="col" className=" px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                            User Id
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                            Time
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                        Duration
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                        Price Unit
                        </th>
                        <th scope="col" className="px-6 py-3 dark:border-strokedark dark:bg-boxdark dark:text-white">
                            Recording
                        </th>
                    </tr>
                </thead>
                <tbody className="dark:border-strokedark dark:bg-boxdark">
                    {liveCalls.length > 0 && liveCalls?.map((call: any) =>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">

                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call?.accountSid}
                            </td>

                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call?.status}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call?.startTime}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call?.duration}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call.price}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                {call?.priceUnit}
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">

                                <Link className='ms-4 bg-success text-black  font-bold rounded-md p-2 dark:bg-success  dark:text-white' to={call.mediaUrl} target='_blank' type="audio/wav" >
                                    Play
                                </Link>
                                {/* <button className='ms-4 bg-danger text-black  font-bold rounded-md p-2 dark:bg-danger dark:text-white' onClick={()=>downloadPdf(call?.mediaUrl)}>
                                    Download
                                </button> */}
                            </td>
                        </tr>
                    )}
                    {liveCalls.length == 0 && <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">
                        <td colSpan={9} scope="col" className="px-6 py-3 text-center dark:border-strokedark dark:bg-boxdark dark:text-white">No Calls Avaiable</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default CallRecording