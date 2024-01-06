import { MdEdit } from 'react-icons/md'

const ManageDID = () => {
  return (
    <div className="relative overflow-x-auto">
    <h2 className="text-base md:text-lg xl:text-3xl 2xl:text-3xl mb-4">
      Manage DID Number
    </h2>
   
    <div className="bg-white dark:bg-boxdark  rounded-xl p-4">
     
      <table id="managedIdTable" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-boxdark dark:border-gray-700">
            <th scope="col" className="w-1/5 px-6 py-3">
              DID Name
            </th>
            <th scope="col" className="w-1/5 px-6 py-3">
              DID Number
            </th>
            <th scope="col" className="w-1/5 px-6 py-3">
              Description
            </th>
            <th scope="col" className="w-1/5 px-6 py-3">
              DID Number
            </th>
            <th scope="col" className="w-1/5 px-6 py-3">
              Description
            </th>
            <th scope="col" className="w-1/5 px-6 py-3">
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
            <td className="px-6 py-4 dark:text-white">Support</td>
            <td className="px-6 py-4 dark:text-white">18669932492</td>
            <td className="px-6 py-4 dark:text-white"></td>
            <td className="px-6 py-4 dark:text-white">Publisher</td>
            <td>
            <button className="whitespace-nowrap inline-flex gap-2 items-center bg-success py-2.5 rounded-lg px-3 text-sm text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5">
            <MdEdit size={16}/> Edit
            </button>
    
            </td>
           
          </tr>)}
          
          
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ManageDID