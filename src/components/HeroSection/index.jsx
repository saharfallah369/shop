import Image from "next/image";
import React from "react";
import Star from "@/assents/images/topStar.png";
import arrow from "@/assents/images/123.png";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "@/styles/landing.module.css"
import MobileMenu from "@/components/HeroSection/mobileMenu"
import SliderTop from "@/components/HeroSection/slider";


const Hero = () =>{
    const validation = Yup.object().shape({
        email: Yup.string("").required("").email(""),
    });
    const submit = ({value}) =>{

    }
    return(
        <div className="right-hero">
            <div className="container grid grid-cols-12 pt-1">
                <div className="col-span-6 max-sm:col-span-12 h-20 relative">
                    <Image src={Star} alt="" className="absolute left-0 animate-pulse" />
                    <h2 className={style.HeroTitle}>نگران استایلت نباش!!!</h2>
                    <h6 className={style.HeroDes}>
                    با طیف گسترده ای از لباس های
                    شیک و با کیفیت ما دیگه نگران استایل تابستونیت نباش، انـواع تی شرت
                    ، شومیز، پیراهن و ... با کیفیت و خنــک با رنگ بنـــــدی های متنوع و زیبا
                    </h6>
                    <div className="mt-20 max-sm:mt-5">
                        <Formik initialValues={{email:""}} onSubmit={submit} validationSchema={validation}>
                            <Form  className="grid grid-cols-12 relative">
                                <Field name="email">
                                    {({
                                        field,
                                        form: {toched,error},
                                        meta,
                                    }) => (
                                        <input type="text" className={style.HeroInput} {...field} placeholder="ایمیلت رو وارد کن و 20% تخفیف بگیر" />
                                    )}
                                </Field>
                                <button className={style.HeroBtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-1 text-white h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
                                    </svg>

                                </button>
                            </Form>
                        </Formik>
                        
                    </div>
                </div>
                <Image src={arrow} alt="" className="absolute max-sm:hidden right-[40%] top-[300px]" />
                <SliderTop />{/* hero section slider */}
            </div>

            <div className="hidden grid-cols-10 gap-2 z-50 pt-3 bg-white h-16 max-sm:grid max-sm:fixed max-sm:bottom-0">
                <MobileMenu />
            </div>
        </div>
    )
}

export default Hero;