import React from "react";
import Logo from '@/components/common/logo'
import Link from "next/link";
import Image from "next/image";
import logooo from "@/assents/images/logoo.png"
import style from "@/styles/layout.module.css";
import { useRouter } from "next/router";

const Header = ({title}) =>{
    const { asPath, pathname } = useRouter();
    //console.log(asPath); // '/blog/xyz'
    //console.log(pathname); // '/blog/[slug]'
    
    const menu=[
        {id:1 , name:"صفحه اصلی" , link:"/"},
        {id:2 , name:"فروشگاه" , link:"/store"},
        {id:3 , name:"وبلاگ" , link:"/blog"},
        {id:4 , name:"درباره ما" , link:"/about"},
        {id:5 , name:"تماس با ما" , link:"/contactUs"},
    ]
    return(
        <>
            <div className={style.mobileHeader}>
                <div className="max-sm:col-span-4">
                    <span className={style.mobileMenuItem + " float-right mr-3"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-5 text-center mt-2 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                </div>
                <div className="max-sm:col-span-4 mx-auto">
                <Image src={logooo} alt="logo" />
                </div>
                <div className="max-sm:col-span-4">
                    <span className={style.mobileMenuItem + " float-left ml-3"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-5 text-center mt-2 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </span>
                </div>
            </div>{/* mobile header */}
            
            <div className="container grid grid-cols-12 pt-1 max-sm:hidden">
                <Logo />

                <div className="col-span-6 h-11 ">
                    <ul className="topMenu mr-4">
                        {menu.map((item) => 
                            <li>
                                <Link href={item.link} className={pathname === item.link ? " isActiveMenu" : ""} > {item.name} </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="col-span-3 h-11 relative">
                    <input type="text" className="bg-gray-100 rounded-full border-none text-xs p-3 pr-8 w-[90%] mt-4" placeholder="جست‌وجو کنید..." />
                    <svg fill="none" stroke="currentColor" className=" top-6 w-6 right-2 cursor-pointer hover:text-black text-gray-700 absolute" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                </div>
                <div className="col-span-1 h-1 mt-3 grid grid-cols-2 justify-center">
                    <span className="topLeft">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                        </svg>
                    </span>
                    <span className="topLeft">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                    </span>
                </div>
            </div>{/* large screen header */}
        </>
    )
}

export default Header;