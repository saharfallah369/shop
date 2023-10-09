import React from "react";
import SectionTitle from "../common/SectionTitle";
import Btn from "../common/btn";
import Tabs from "./tab";


const OurProduct = () =>{
    return(
        <>
            <SectionTitle title={"محصولات ما"} subTitle="Our Products" />
            
            <Tabs />

            <div id="ourPro" className="container grid grid-cols-11">
                <Btn title="مشاهده همه" btnClass="col-span-1 mt-28 col-start-6 max-sm:mt-5 max-sm:col-span-3 max-sm:col-start-5" />
            </div>
        </>
    )
}
export default OurProduct;