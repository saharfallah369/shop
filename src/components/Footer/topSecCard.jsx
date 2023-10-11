import React from "react";
import style from "@/styles/layout.module.css";

const TopSectionCard = ({title,subTitle, icon, color ,txtColor}) =>{

    return(
        <>
            <div className={style.footerTopCard}>
                <div className={style.footerTopSecIcon + color}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 max-sm:!mr-[-8px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
                    </svg>
                </div>
                <div className="col-span-9">
                    <h6 className="mr-3 mt-5 text-gray-600 font-shabnam">
                    {title}
                        <p className={ txtColor}>{subTitle}</p>
                    </h6>
                </div>

            </div>
        </>
    )

}

export default TopSectionCard;