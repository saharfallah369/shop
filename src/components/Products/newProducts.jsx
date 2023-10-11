import React from "react";
import SectionTitle from "../common/SectionTitle";

import Btn from "../common/btn";
import NewProductSlider from "@/components/Sliders/newProductsSlider";





const newProduct = () =>{
    return(
        <div className="mb-10">  
            <div className="container">
                <SectionTitle title="جدیدترین محصولات ما" subTitle="Products categorization" />
                <div className="grid grid-cols-12 gap-2 mb-3">
                    
                    <Btn title={"مشاهده همه"} btnClass="col-span-2 max-sm:col-span-4 border-orange-200 hover:bg-gray-300 hover:text-white"  />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrow-right max-sm:col-start-8 col-start-11 border-orange-200 hover:bg-gray-300 hover:text-white" icon="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrow-left border-orange-200 hover:bg-gray-300 hover:text-white" icon="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />

                </div>

            </div>
            

            <NewProductSlider />



        </div>
    )
}
export default newProduct;