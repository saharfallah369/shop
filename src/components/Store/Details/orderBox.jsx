import React, { useState } from "react";
import style from "@/styles/store.module.css"
import Image from "next/image";
import img from "@/assents/images/imagePro.png"

const OrderBox = () => {

    const [counter, setCounter] = useState(5);

    return (
        <>
            <div className="grid grid-cols-12 border-2 mt-5 border-gray-300">
                

                <div className="grid gap-2 grid-cols-12 col-span-10 col-start-2">
                    <h5 className={style.DesTitle + " py-2 border-b-2 col-span-12 border-gray-300"}>ثبت سفارش</h5>
                    <Image className="col-span-3 flex h-12 mt-1 float-right" src={img} alt="" />
                    <div className="mt-1 col-span-9 text-xs text-gray-400 float-right ">
                        <p className="w-full">سایز XL</p>
                        <p className="mt-1 w-full">رنگ آبی</p>
                    </div>

                    <p className="col-span-3">تعداد</p>
                    <div className="col-span-9 gap-2 grid grid-cols-12 h-9 border-2 border-gray-300 rounded-full">
                        <div className="rounded-full mr-1 mt-1 w-6 h-6 cursor-pointer bg-gray-300 pb-1 text-center text-white"
                        onClick={() => setCounter(counter + 1)}>+</div>
                        <span className="text-center col-span-6 col-start-4">{counter}</span>
                        <div className="rounded-full cursor-pointer mr-1 mt-1 w-6 h-6 bg-gray-300 pb-1 text-center text-white"
                        onClick={() => setCounter(counter - 1)}
                        >-</div>
                    </div>
                    <div className="col-span-12 text-xs mt-1 text-gray-400">
                        <span>قیمت :</span><span>350,000 تومان</span>
                        
                    </div>
                    <div className="col-span-12 text-xs mb-3 mt-1">
                        <span className=" text-gray-400">قیمت با تخفیف :</span><span>300,000 تومان</span>
                    </div>

                    <button className="p-3 leading-6 mb-3 rounded-full text-xs font-shabnam col-span-12 bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-right w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                        افزودن به سبد خرید</button>
                </div>
            
            </div>
        </>
    )


}

export default OrderBox