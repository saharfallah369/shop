import Image from "next/image";
import React from "react";
import Star from "@/assents/images/Star5.png"
const SectionTitle = ({title , subTitle = ""}) =>{
    return (
        <>
            <div className="mt-10 mb-8">
                <h3 className="text-2xl relative text-themeColorB font-shabnam font-extrabold text-center">
                    {title}
                </h3>

                <h6 className="text-center text-gray-400">{subTitle}</h6>
            </div>
        </>
    )
}

export default SectionTitle;