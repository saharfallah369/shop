import React from "react";
import SectionTitle from "@/components/common/SectionTitle"
import Btn from "../common/btn";
import ArticleSlider from "@/components/Sliders/articleSlider";

const Article = () =>{
    return(
        <>
            <div className="container mt-20">
                <SectionTitle title={"مقالات ما"} subTitle="Our Articles" />
                <div className="grid grid-cols-12 gap-2">
                    
                    <Btn title={"مشاهده همه"} btnClass="col-span-2  max-sm:col-span-4 border-orange-200 hover:bg-gray-300 hover:text-white"  />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrowArticle-right  max-sm:col-start-9 col-start-11 border-orange-200 hover:bg-gray-300 hover:text-white" icon="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrowArticle-left border-orange-200 hover:bg-gray-300 hover:text-white" icon="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />

                </div>
                <ArticleSlider />
            </div>
        </>
    )
}

export default Article;