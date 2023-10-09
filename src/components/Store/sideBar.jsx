import React from "react";
import Accordion from "@/components/Store/accordion"

const Sidebar = () =>{
    return(
        <>
            <div className="col-span-3 content-center h-auto my-5 bg-gray-200">
                <h6 className="border-b-2 container border-gray-300 p-3 text-sm font-shabnam">فیلتر محصولات</h6>

                <div className="container">
                    <Accordion />
                </div>
            </div>
        </>
    )
}

export default Sidebar;