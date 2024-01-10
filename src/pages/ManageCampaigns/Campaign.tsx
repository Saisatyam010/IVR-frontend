import DataTable from 'datatables.net-dt';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCampainData } from '../../api/Addbuyer';

const Campaign = () => {

  const [addbuyer, setAddBuyer] = useState([{}])

  const addCampainData = async () => {
    const res = await getCampainData()
    console.log(res+"data");
    
    if (res.status == "success") {
      setAddBuyer(res.addBuyerMongo)
    }
  }

  useEffect(() => {
    addCampainData()
  }, [])
  const params = useParams();
  let table = new DataTable('#campaignTable');
  return (
    <div className="relative overflow-x-auto">
      <h2 className="text-base md:text-lg xl:text-3xl 2xl:text-3xl mb-4">
        Campaign Name:<span className='capitalize'> {params.campaignId} </span> | Tollfree Numbers : (18669932492)
      </h2>
      <div className="bg-white dark:bg-boxdark  rounded-xl p-4">
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Number
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
                Distribution Value
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
              {
                addbuyer.map((ele:any, index) =>
                <>
                <td className="px-6 py-4 dark:text-white">
                    {ele?.campaign_name}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.buyer_name}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.destination_number}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.distribution_weightage}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.ring_timeout}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.call_control_strategy}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.live_call_limit}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.daily_call_limit}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.monthly_call_limit}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.buyer_status}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {ele?.active_hours}
                  </td>
                </>
                  
                )
              }

            </tr>

            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaign;
