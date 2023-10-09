import React from "react";
import Image from "next/image";
import LogoImg from "@/assents/images/logo.png";


const Logo = ({des="" , LogoCols="2"}) =>{
    return (
        <>
            <div className={LogoCols + " h-20 mt-3 col-span-" + LogoCols + " max-sm:col-span-10 max-sm:col-start-1" }>
                <Image src={LogoImg} alt=""/>
                <p className="text-justify mt-2 text-gray-400 text-xs p-2">{des}</p>
            </div>
        </>
    )
}

export default Logo;