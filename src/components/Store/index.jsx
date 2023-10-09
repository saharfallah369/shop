import React from "react";
import SortCard from "@/components/Store/storeCard"

const Store = () =>{
    return(
        <>
            <div className=" grid grid-cols-12 gap-5 border-t-2 mt-5 border-gray-300">
                <SortCard />
                <SortCard />
                <SortCard />
                <SortCard />
                <SortCard />
                <SortCard />
                <SortCard />
            </div>
        </>
    )
}

export default Store;