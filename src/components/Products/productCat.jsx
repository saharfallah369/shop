import React from "react";
import ProductCard from "./productCatCard";
import SectionTitle from "../common/SectionTitle";


const Products = () => {

    
    const ProductCat = [
        {id:1 , title: "مردانه", image:"" , catImg:""},
        {id:2 , title: "زنانه", image:"" , catImg:""},
        {id:1 , title: "بچگانه", image:"" , catImg:""},
        {id:1 , title: "ورزشی", image:"" , catImg:""},
        {id:1 , title: "زیبایی و سلامت", image:"" , catImg:""},
        {id:1 , title: "مجله مد", image:"" , catImg:""},

    ]


    return(
        <div className="container">
            <SectionTitle title="دسته بندی محصولات" subTitle='products categorization' />

            <div className="grid grid-cols-12 h-72 max-sm:h-auto gap-3">
                {ProductCat.map((Item) => <ProductCard Cat={Item} /> )}
            </div>
            
        </div>

    )
}

export default Products;