
import { Link } from 'react-router-dom'
import DataTable from 'datatables.net-dt'
const ManagCampaigns = () => {
 
// let table = new DataTable('#campaignTable');
  return (
    

<div className="relative overflow-x-auto">
    <h2 className='text-base md:text-lg xl:text-3xl 2xl:text-3xl mb-4'>Manage Campaigns</h2>
  <div className='bg-white dark:bg-boxdark  rounded-xl p-4'>
    <div className='flex justify-end mb-6'>
        <button
              
              className="inline-flex items-center justify-center bg-primary py-2.5 rounded-xl px-4 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
            >
              Create Campaign
            </button>
    </div>
  <table id="campaignTable" className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr  className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Strategy
        </th>
        <th scope="col" className="px-6 py-3">
          Active Buyers
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Publisher
        </th>
        <td className="px-6 py-4 dark:text-white">
          
        </td>
        <td className="px-6 py-4 dark:text-white">
          Active 
        </td>
        <td className="px-6 py-4 dark:text-white">
          Weightage Distribution
        </td>
        <td className="px-6 py-4 dark:text-white">
           <div>Own (1885581308)</div>
           <div>Amit (18452568860)</div>
        </td>
        <td className="px-6 py-4 dark:text-white">
        <Link
              to="/manage-campaign/publisher"
              className="inline-flex items-center justify-center bg-primary py-2.5 rounded-xl px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Select
            </Link>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Advertiser
        </th>
        <td className="px-6 py-4 dark:text-white">
          
        </td>
        <td className="px-6 py-4 dark:text-white">
          Active 
        </td>
        <td className="px-6 py-4 dark:text-white">
          Weightage Distribution
        </td>
        <td className="px-6 py-4 dark:text-white">
           <div>Own (1885581308)</div>
           <div>Amit (18452568860)</div>
        </td>
        <td className="px-6 py-4 dark:text-white">
        <Link
              to="/manage-campaign/advertiser"
              className="inline-flex items-center justify-center bg-primary py-2.5 rounded-xl px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Select
            </Link>
        </td>
      </tr>
      <tr className="bg-white border-none dark:bg-boxdark dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Affiliate
        </th>
        <td className="px-6 py-4 dark:text-white">
          
        </td>
        <td className="px-6 py-4 dark:text-white">
          Active 
        </td>
        <td className="px-6 py-4 dark:text-white">
          Weightage Distribution
        </td>
        <td className="px-6 py-4 dark:text-white">
           <div>Own (1885581308)</div>
           <div>Amit (18452568860)</div>
        </td>
        <td className="px-6 py-4 dark:text-white">
        <Link
              to="/manage-campaigns/affiliate"
              className="inline-flex items-center justify-center bg-primary py-2.5 rounded-xl px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Select
            </Link>
        </td>
      </tr>
     
    </tbody>
  </table>
  </div>  
</div>

  )
}

export default ManagCampaigns