import React from "react";
import Image from "next/image";
import Img1 from "@/assents/images/article1.png"

const ArticleCat = () =>{

    return(
        <>  
            <div className="col-span-3 max-sm:col-span-8 relative mx-2 h-80">
                <Image src={Img1} alt="" className=" w-full h-full rounded-full " />
                <div className="bg-white/10 backdrop-filter backdrop-blur-lg border-[1px] border-white w-[95%] left-[2.5%] rounded-b-full h-[40%] absolute top-[58%] z-30">
                    <h4 className="text-center w-[70%] m-auto mt-5 font-shabnam">
                        فواید استفاده از عینک های آفتابی
                    </h4>
                </div>
            </div>
            
        </>
    )
}

export default ArticleCat;