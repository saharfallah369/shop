import React from "react";

const Colors = ({colors , colClass="col-span-3"}) =>{

    return(
        <>
            <div className="grid grid-cols-12 gap-3">
                {colors.map((item) => 
                    <div className={colClass + " cursor-pointer"}>
                        <div className={ item.colorCode + " w-full h-14 rounded-full"}></div>
                        <p className="font-shabnam text-xs text-center">{item.colorTitle}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Colors;