import React from "react";
import Image from "next/image";
import dress from "@/assents/images/dress.png";
import ProCat from "@/assents/images/WomanDress.png";
const ProductCard = ({Cat}) =>{

    return(
        <div className="col-span-2 max-sm:col-span-6 bg-gray-200 rounded-full hover:opacity-80 transition ease-out">
            <Image src={ProCat} alt="" className="max-sm:mx-2" />
            <div className="w-full inline-block proCard">
                <Image className="m-auto" src={dress} alt=""/>
            </div>
            <h6 className="text-center font-shabnam h-16 mt-2 font-extrabold CatTitle text-xl">
            {Cat.title}
            </h6>
        </div>
    )
}

export default ProductCard;