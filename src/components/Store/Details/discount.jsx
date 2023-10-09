import React from "react";

const Discount = () =>{
    return(
        <>
            <div className="grid grid-cols-12 gap-1 h-16 font-shabnam bg-orange-400">
                <div className="col-span-6">
                    <h5 className="text-md mt-2 mr-2 text-black">%25 تخفیف</h5>
                    <p className="text-[10px] mt-2 mr-2 text-white">خرید بیش 100 هزار تومان</p>
                </div>
                <div className="col-span-6 text-center m-2 mb-2 bg-slate-300">
                    <h5 className="text-lg pt-2 h-5 mt-1 mr-1 text-black">تا 20 شهریور</h5>
                </div>
            </div>
        </>
    )
}

export default Discount;