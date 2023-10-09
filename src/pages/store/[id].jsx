import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import Details from "@/components/Store/Details";
import Discount from "@/components/Store/Details/discount";
import OrderBox from "@/components/Store/Details/orderBox"
const ProductDetails = () =>{
    return(
        <>
            <div className="container gap-8 grid grid-cols-12 my-10">
                <div className="col-span-9 grid grid-cols-12 gap-5">
                    <Details />
                </div>

                <div className="col-span-3 h-96">
                    <Discount />

                    <OrderBox />
                    
                </div>
            </div>
        </>
    )
}

ProductDetails.getLayout = (page) => MainLayout(page, "  جزییات محصول");
export default ProductDetails;