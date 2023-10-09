import React from "react";

const Cat = () =>{

    const cat = [
        {id:1 , catTitle:"لارج" },
        {id:2 , catTitle:"ایکس لارج" },
        {id:3 , catTitle:"ایرانی" },
        {id:4 , catTitle:"الیاف کتان" },
    ]
    return(
        <>
            {cat.map((item) =>
                <div className="cursor-pointer float-right h-8 w-fit px-2 mt-4 mx-1 border-2 text-xs text-center text-gray-400 font-shabnam border-gray-300 rounded-full">
                    <span className="float-right mr-2 mt-1">{item.catTitle}</span>
                    <span className="w-4 mt-[5px] float-left mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" classname="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </span>

                </div>
            )}
        </>
    )
}

export default Cat;