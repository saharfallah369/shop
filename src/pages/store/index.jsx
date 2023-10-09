import MainLayout from "@/components/Layout/MainLayout";
import Sidebar from "@/components/Store/sideBar";
import React from "react";
import StoreContent from "@/components/Store"
import SelectSort from "@/components/Store/select"
import Cat from "@/components/Store/category"

const store = () =>{
    return(
        <>  
            <div className="container gap-4 h-auto grid grid-cols-12">
                <Sidebar />

                <div className="col-span-9">
                    
                    <header className="grid grid-cols-12">
                        <h6 className="col-span-2 mt-8 text-black font-bold text-sm font-shabnam">
                            مرتب سازی بر اساس :
                        </h6>

                        <SelectSort />


                        <h6 className=" col-start-12 col-span-1 mt-8 text-black font-bold text-sm font-shabnam">
                            <span className="text-red-500 ml-1">428</span>
                                محصول
                        </h6>

                    </header>

                    <div className="flex mb-5">
                        <Cat />
                    </div>

                    
                    <StoreContent />
                    
                </div>
            </div>
        </>
    )
}
store.getLayout = (page) => MainLayout(page, "  فروشگاه");
export default store;