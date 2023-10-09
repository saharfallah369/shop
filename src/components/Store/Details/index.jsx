import React, { useState } from "react";

import { Rating, Typography  } from "@material-tailwind/react";
import style from "@/styles/store.module.css"
import DetailsTab from "./detailsTabs";
import ProductSlider from "./productSlider";
import Suggestion from "./suggestion";
import Colors from "../colors";

const Details = () => {
    const [rated, setRated] = useState(4);

    const colors = [
        {id:1 , colorTitle:"قهوه ای" , colorCode:"bg-[#74493C]"},
        {id:2 , colorTitle:"سفید" , colorCode:"bg-[#FFFFFF]"},
        {id:3 , colorTitle:"مشکی" , colorCode:"bg-[#272727]"},
        {id:4 , colorTitle:"طوسی" , colorCode:"bg-[#C5C5C5]"},
        {id:5 , colorTitle:"آبی" , colorCode:"bg-[#4B8CD8]"},
        {id:6 , colorTitle:"سبز" , colorCode:"bg-[#00CC8F]"},
        {id:7 , colorTitle:"قرمز" , colorCode:"bg-[#E2233A]"},
    ]

    return(
        <> 
            <div className="col-span-5">
                <ProductSlider />
            </div>

            <div className="col-span-7">
                <h3 className="font-shabnam font-bold">مانتو زنانه سرژه راه راه آبی رنگ</h3>
                <header className="w-full flex">
                    <div className="ml-4 my-3 float-right">
                        <Rating className="flex text-orange-400" value={4} onChange={(value) => setRated(value)} />
                        <Typography className="text-gray-400 mr-[130px] mt-[-23px]" color="blue-gray">{rated}</Typography>
                    </div>
                    <span className="w-28 mt-4 float-right text-gray-300 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 ml-1 float-right h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        120 نظر
                    </span>
                    
                </header>
                
                <h6 className={style.DesTitle}>توضیحات کوتاه</h6>
                <p className="text-justify text-xs leading-6 text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان 
                </p>
                <h6 className={style.DesTitle}>انتخاب سایز</h6>
                <div className="w-full flex">
                    <div className={style.sizeBox}>XL</div>
                    <div className={style.sizeBox}>XL</div>
                    <div className={style.sizeBox}>XL</div>
                    <div className={style.sizeBox}>XL</div>
                    <div className={style.sizeBox}>XL</div>
                </div>

                <h6 className={style.DesTitle}>انتخاب رنگ</h6>
                    <div className="w-[80%]">
                    <Colors colors={colors} colClass="col-span-2" />
                    </div>
                    
                    


            </div>

            <div className="col-span-12 ">
                <DetailsTab />

            </div>

            <div className="col-span-12">
                <Suggestion />
            </div>

                
            



        </>
    )
}

export default Details;