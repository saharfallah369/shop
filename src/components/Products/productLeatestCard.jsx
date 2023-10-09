import React from "react";
import Image from "next/image";
import img from "@/assents/images/Rectangle.png"
const productLeatest = ({disCount="",section=false}) =>{
    return(
        <>  
            <div className={ section ? " content-center col-span-3 max-sm:col-span-6 relative cursor-pointer min-h-80" : " col-span-4 relative cursor-pointer min-h-80"}>
                <div className="bg-white justify-center ">
                    {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        {disCount} % 
                        تخفیف
                    </span> : ""}
                    <Image src={img} height={100} width={100} className="w-full" alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </>
    )
}

export default productLeatest;