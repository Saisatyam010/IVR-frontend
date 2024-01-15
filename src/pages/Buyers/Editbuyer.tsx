import { useForm } from "react-hook-form"
import {editBuyer,getSingleBuyer} from "../../api/Buyer"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export type BuyerInputs={
    campaign_name:string,
    buyer_name:string,
    destination_number:string,
    distribution_weightage:number,
    ring_timeout:string,
    call_control_strategy:string,
    live_call_limit:string,
    daily_call_limit:string,
    monthly_call_limit:string,
    buyer_status:boolean,
    priority:number,
}   
const Editbuyer = () => {
    const [buyer,setBuyer]=useState({})
    const buyerId=useParams().id
    const fetchSingleBuyer=async(buyerId:string)=>{
        const data=await getSingleBuyer(buyerId);
        // console.log(JSON.stringify(data.singleBuyer)+"buyer")
        setBuyer(data.singleBuyer)
        reset(data.singleBuyer)
    }
    useEffect(()=>{
        if(buyerId)
       fetchSingleBuyer(buyerId)
       
    },[])
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm<BuyerInputs>();


      
    const onSubmit = async(data:BuyerInputs)=>{
    console.log(data)
     const res = await  editBuyer(data,buyerId) 
     if(res.status == "success"){
        alert(res.message) 
     } 
     else{
        alert(res.message)
     }
      navigate('/manage-buyer')
    }
   

    return (
        <>
        <p className="font-bold text-[30px] pb-4 ms-2"> Edit Buyer</p>
        <div className="dark:border-strokedark dark:bg-boxdark  rounded-xl bg-white shadow-md">
            <form className="p-2 lg:p-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Campaign Name</label><br />
                        <input {...register("campaign_name", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Buyer Name</label><br />
                        <input {...register("buyer_name", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-5">
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Buyer Group</label><br />
                        <input {...register("campaign_name", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Destination Number</label><br />
                        <input {...register("destination_number", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-5">
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Distribution Weightags</label><br />
                        <input {...register("distribution_weightage", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Ring Timeout</label><br />
                        <input {...register("ring_timeout", { required: true })}  className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-5">
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Call Control Strategy</label><br />
                        <input {...register("call_control_strategy", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Priority</label><br />
                        <input {...register("priority", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                  
                </div>


                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-4">
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Time Taken</label><br />
                        <input {...register("campaign_name", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                    <div className="space-y-2 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Buyer Name</label><br />
                        <input {...register("buyer_name", { required: true })} className="w-full rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-5">
                  
                    <div className="flex !items-center gap-4 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Daily call limit</label><br />

                        <div className="flex items-start gap-2">
                            <input {...register("daily_call_limit", { required: true })} type="radio" className=" rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="no limit" />No Limit
                        </div>
                        <div className="flex items-start gap-2">
                            <input {...register("daily_call_limit", { required: true })} type="radio" className="  rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="set limit"/>Set Limit
                        </div>

                    </div>

                    <div className="flex !items-center gap-4 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Monthly call limit</label><br />

                        <div className="flex items-start gap-2">
                            <input {...register("monthly_call_limit", { required: true })} type="radio"  className=" rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="no limit"/>No Limit
                        </div>
                        <div className="flex items-start gap-2">
                            <input  {...register("monthly_call_limit", { required: true })} type="radio"  className="  rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="set limit"/>Set Limit
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-5">

                    <div className="flex !items-center gap-4 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Buyer Status</label><br />

                        <div className="flex items-start gap-2">
                            <input {...register("buyer_status", { required: true })} type="radio"  className=" rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value={true}/>Active
                        </div>
                        <div className="flex items-start gap-2">
                            <input {...register("buyer_status", { required: true })} type="radio"  className="  rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value={false}/>Inactive
                        </div>

                    </div>
                    <div className="flex !items-center gap-4 w-full lg:w-1/2">
                        <label className="font-bold ms-2 dark:text-white">Live call limit</label><br />
                        
                        <div className="flex items-start gap-2">
                            <input {...register("live_call_limit", { required: true })} type="radio"   className=" rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="no limit" />No Limit
                        </div>
                        <div className="flex items-start gap-2">
                            <input {...register("live_call_limit", { required: true })} type="radio"  className="  rounded-xl mt-2 border-bg-gray focus:outline-none bg-transparent border border-whote  p-3" value="set limit"/>Set Limit
                        </div>
      
                    </div>
                 
                </div>

                {/* <div className="ms-3">
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
                </div> */}
                <p className="mt-4 text-center mb-5 p-2 mt-5">
                    <button type="submit" className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Submit
                    </button>
                    <Link to="/manage-campaign">
                    <button className="inline-flex items-center justify-center bg-[#8A99AF] ms-4 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-xl"  >
                        Cancel
                    </button>
                    </Link>
                    
                </p>
            </form>


        </div>
        </>

    )
}

export default Editbuyer