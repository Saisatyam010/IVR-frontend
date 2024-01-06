import React from 'react'
import { MdDelete } from 'react-icons/md'

const BlockCallerID = () => {
  return (
    <div className="relative overflow-x-auto">
      <h2 className="text-base md:text-lg xl:text-3xl 2xl:text-3xl mb-4">
        Block Caller Id 
      </h2>
      <div className="bg-white dark:bg-boxdark  rounded-xl p-4 mb-4">
         <div className='flex gap-2 mb-2 w-full lg:w-[705[ xl:w-[60%]'>
         <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent" placeholder="90210" required/>
         <button className="whitespace-nowrap bg-primary py-2.5 rounded-lg px-4 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5">
              Block Number
        </button>
         </div>
      </div>
      <div className="bg-white dark:bg-boxdark  rounded-xl p-4">
       
        <table id="campaignTable" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
              <th scope="col" className="w-1/3 px-6 py-3">
                S.no
              </th>
              <th scope="col" className="w-1/3 px-6 py-3">
                Numbers
              </th>
              <th scope="col" className="w-1/3 px-6 py-3">
                Action
              </th>
              
            </tr>
          </thead>
          <tbody>
           {[1,2,3,4,5,6,7,8,9,10,11].map((item,index)=><tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index+1}
              </th>
              
              <td className="px-6 py-4 dark:text-white">12522089742</td>
              <td className="px-6 py-4 dark:text-white">
              <button className="whitespace-nowrap inline-flex gap-2 items-center bg-danger py-2.5 rounded-lg px-3 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5">
              <MdDelete size={16}/> Delete 
        </button>
                
              </td>
             
            </tr>)}
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlockCallerID