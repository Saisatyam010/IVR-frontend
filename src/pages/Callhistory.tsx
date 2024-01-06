export default function Callhistory () {
    return (
        <>

<p className="font-bold text-[30px] pb-4 ms-2">
    Call History
</p>
            <div className="dark:border-strokedark dark:bg-boxdark rounded-xl rounded-xl bg-white shadow-md">
                <div className="flex p-2">
                    <div className="ms-3">
                        <label className="font-bold ms-2 dark:text-white">Date Range</label><br />
                        <input className="rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-strokedark dark:bg-boxdark">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:border-strokedark dark:bg-boxdark">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Silver
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $2999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $2999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $2999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop
                            </td>
                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:border-strokedark dark:bg-boxdark">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                White
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $1999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $1999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $1999
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Laptop
                            </td>
                        </tr>
                        <tr className="bg-white dark:border-gray-700 dark:border-strokedark dark:bg-boxdark">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Black
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Accessories
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $99
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Accessories
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $99
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Accessories
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                $99
                            </td>
                            <td className="px-6 py-4 dark:border-strokedark dark:text-white">
                                Accessories
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
} 