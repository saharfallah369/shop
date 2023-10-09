import React from "react";
import img from "@/assents/images/image42.png";
import Image from "next/image";
import { useRouter } from "next/router";
const StoreCard = () =>{
    const router = useRouter();

    return(
        <>
            <div className="col-span-3 mt-2 bg-gray-200 h-72">
                <Image onClick={() => router.push(`/store/${encodeURIComponent('14')}`)} className="cursor-pointer" src={img} alt="" />
                <div className="container">
                    <h6 onClick={() => router.push(`/store/${encodeURIComponent('14')}`)} 
                    className="text-xs text-black font-shabnam text-right my-3 cursor-pointer">شومیز آستین بلند زنانه سرژه</h6>
                    <div className="grid grid-cols-12">
                        <div className="py-3 px-1 hover:bg-green-600 hover:text-white transition duration-200 rounded-full justify-center bg-gray-300 h-10 col-span-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 m-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                        <div className="col-span-6 mt-4 text-gray-400 col-start-7 text-xs font-shabnam text-left">
                            <span>420,000 </span> <span>تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StoreCard;