import React, { useEffect } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from 'next/router';
import { useState } from "react";
import Image from "next/image";
import img from "@/assents/images/841.png"
import TestSlider from "@/components/Products/testSlider";
const blog = () =>{
    // const [slider,setSlider] = useState(false);

    // const { asPath, pathname } = useRouter();
    // //console.log(asPath); // '/blog/xyz'
    // //console.log(pathname); // '/blog/[slug]'
    // useEffect(() => {
    //     setSlider(true);
    //     setTimeout(() => {
    //         setSlider(false);
    //     },2000);
    //     }, []);

    return(
        <>
            {/* <div className={ slider ? 
                "transform scale-150 translate-x-28 duration-75 delay-300 h-10 w-16 m-auto mt-11 bg-slate-400 " 
                : " "}>
                click
            </div> */}
            {/*  */}
            <TestSlider />
            <Image src={img} alt="" width={100} height={100} 
            className="w-28 h-64 testAnim" />
        </>
    )
}

//blog.getLayout = (page) => MainLayout(page, "وبلاگ");
export default blog;