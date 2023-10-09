import React from "react";
import Image from "next/image";
import ads1 from "@/assents/images/ads.png";
import ads2 from "@/assents/images/ads2.png";

const Ads = () =>{
    return(
        <>
            <div className="container grid gap-5 mt-20 grid-cols-12">
                <Image src={ads1} className="col-span-6 max-sm:col-span-12 " alt="discount ads" />
                <Image src={ads2} className="col-span-6 max-sm:col-span-12 " alt="discount ads" />
            </div>
            
        </>
    )
}

export default Ads;