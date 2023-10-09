import React from "react";
import SectionTitle from "@/components/common/SectionTitle"
import SortCard from "@/components/Store/storeCard"

const Suggestion = () =>{
    return(
        <>
            <SectionTitle title={"مرتبط با سلیقه تو"} subTitle="Related to taste" />
            <div className="grid grid-cols-12 gap-5 my-4">
                <SortCard />
                <SortCard />
                <SortCard />
                <SortCard />
            </div>
        </>
    )
}

export default Suggestion