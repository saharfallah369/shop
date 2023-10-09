import React from "react";
import style from "@/styles/layout.module.css";
import TopSectionCard from "@/components/Footer/topSecCard";
import Logo from '@/components/common/logo'
import Title from "@/components/Footer/title";

import Link from "next/link";
import Image from "next/image";
import Img1 from "@/assents/images/Namaad1.png";
import Img2 from "@/assents/images/Namaad2.png";

const Footer = () =>{

    const Links = [
        {id:0 , title:"صفحه اصلی" , link:"/"},
        {id:0 , title:"پشتیبانی" , link:"/"},
        {id:0 , title:"برندها" , link:"/"},
        {id:0 , title:"فروشگاه" , link:"/"},
    ]

    const About = [
        {id:0 , title:"قوانین و مقررات" , link:"/"},
        {id:0 , title:"همکاری با ما" , link:"/"},
        {id:0 , title:"درباره ما" , link:"/"},
        {id:0 , title:"تماس با ما" , link:"/"},
    ]

    return(
        <>
            <div className="bg-white min-h-[500px]">
                <div className={style.secTopFooter + " container"} >
                    <TopSectionCard color={" bg-themeColorGG"} txtColor={" text-themeColorGG"}  
                    icon="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    title={"امکان"} subTitle={"تعویض محصول"} />

                    <TopSectionCard color={" bg-themeColorOr"} txtColor={" text-themeColorOr"}  
                    icon="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    title={"ضمانت"} subTitle={" اصالت محصول"} />

                    <TopSectionCard color={" bg-themeColorBB"}  txtColor={" text-themeColorBB"}
                    icon="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    title={"تنوع"} subTitle={" طراحی و رنگبندی "} />

                    <TopSectionCard color={" bg-themeColorP"} txtColor={" text-themeColorP"}  
                    icon="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    title={"امکان"} subTitle={" خرید اقساطی "} />

                </div>
                <div className="container gap-10 overflow-x-hidden grid grid-cols-12 border-b-2 h-72 max-sm:h-[600px] max-sm:bg-white border-gray-200">
                    
                    <Logo LogoCols="4" des={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه"} />
                    
                    <div className="col-span-3 max-sm:col-span-6">
                        
                        <Title title={"لینک های مفید"} />
                        {Links.map((Item) => <Link className="block mt-4 text-xs hover:text-gray-700 text-gray-400 transition duration-300" href={Item.link}>{Item.title}</Link> )}
                        
                    </div>
                    
                    <div className="col-span-3 max-sm:col-span-6">
                        
                        <Title title={"درباره ما"} />
                        {About.map((Item) => <Link className="block mt-4 text-xs hover:text-gray-700 text-gray-400 transition duration-300" href={Item.link}>{Item.title}</Link> )}
                    </div>

                    <div className="col-span-2 max-sm:col-span-12">
                        
                        <Title title={"با اعتماد خرید کنید"} />
                        <div className="mt-5 grid gap-5 grid-cols-12 ">

                            <div className="col-span-3 max-sm:col-span-3">
                                <Image src={Img1} className="w-full" alt />
                            </div>

                            <div className="col-span-3 max-sm:col-span-3">
                                <Image src={Img2} className="w-full" alt />
                            </div>

                        </div>
                        
                    </div>

                </div>


                <div className="container grid grid-cols-12">
                    <p className="col-span-5 max-sm:col-span-12 max-sm:mb-5 text-xs text-gray-400 mt-5">
                    تمامی حقوق این سایت متعلق به تیم نرم افزاری گندم می باشد
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;