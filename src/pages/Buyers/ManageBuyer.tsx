

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteBuyerId, getCampainData } from '../../api/Buyer';
import { CiPause1 } from "react-icons/ci";

const ManageBuyer = () => {
  const [addbuyer, setAddBuyer] = useState([{}])
  const navigate=useNavigate();
  const [pause,setPause] = useState(true)
  const fetchBuyers = async () => {
    const res = await getCampainData()
    console.log(res + "data");
    if (res.status == "success") {
      setAddBuyer(res.addBuyerMongo)
    }
  }
  const handleEdit=(buyerId:string)=>{
        navigate(`/edit-buyer/${buyerId}`)
      }
  const deleteBuyer = async (id: any) => {
    const res = await deleteBuyerId(id)
    if(res.status == "success"){
      alert("deleted successfully")
      fetchBuyers()
    }
  }
  useEffect(() => {
    fetchBuyers()
  }, [])


  return (
    <div className="relative overflow-x-auto">
      <h2 className="text-base md:text-lg xl:text-3xl 2xl:text-3xl mb-4">
        Campaign Name:<span className='capitalize'>  </span> | Tollfree Numbers : (18669932492)
      </h2>
      <div className="bg-white dark:bg-boxdark  rounded-xl p-4 overflow-auto">
        <div className="flex justify-end mb-6">
          <div className="flex gap-3">
            <Link to='/addbuyer'>
              <button className="inline-flex items-center justify-center bg-primary py-2.5 rounded-xl px-4 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5">
                Add Buyer
              </button>
            </Link>
          </div>
        </div>
        <table id="campaign-table" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
              <th scope="col" className="px-6 py-3">
               Buyer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Buyer Number
              </th>
              <th scope="col" className="px-6 py-3">
                AHT
              </th>
              <th scope="col" className="px-6 py-3">
                AHT Daily
              </th>
              <th scope="col" className="px-6 py-3">
                Today Answered
              </th>
              <th scope="col" className="px-6 py-3">
                Today Missed
              </th>
              <th scope="col" className="px-6 py-3 w-32">
                Calls Today/ Daily Cap
              </th>
              <th scope="col" className="px-6 py-3 w-32">
                Calls This Month/ MonthlyCap
              </th>
              <th scope="col" className="px-6 py-3">
                Live Calls Cap
              </th>
              <th scope="col" className="px-6 py-3">
                Priority
              </th>
              <th scope="col" className="px-6 py-3">
                Ring Timeout
                </th>
                <th scope="col" className="px-6 py-3">
                Call Control Strategy
                </th>
              <th scope="col" className="px-6 py-3">
                Distribution Weightage
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            { addbuyer.length>0&&
              addbuyer.map((ele: any, index) =>
                <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.buyer_name}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                  {ele?.destination_number}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    NA
                  </td>
                 
                  <td className="px-6 py-4 dark:text-white">
                  NA
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                   NA
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    NA
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                   NA
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                  NA
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                  {ele?.live_call_limit}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.priority}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.ring_timeout}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.call_control_strategy}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.distribution_weightage}
                  </td>
                  <td className="px-6 py-4 dark:text-white flex gap-3">
                    <button className={`whitespace-nowrap inline-flex gap-2 items-center ${pause?"bg-danger":"bg-success"}  py-2.5 rounded-lg px-3 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5`} onClick={()=>setPause(!pause)}>
                      <CiPause1 size={16} /> {pause?"Pause" : "Resume"}
                    </button>
                    <button onClick={()=>handleEdit(ele?._id)} className="whitespace-nowrap inline-flex gap-2 items-center bg-success rounded-lg   text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5" >
                      Edit
                    </button>
                    <button className="whitespace-nowrap inline-flex gap-2 items-center bg-danger rounded-lg   text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5" onClick={()=>deleteBuyer(ele._id)}>
                      Delete
                    </button>
                  </td>
                </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBuyer
