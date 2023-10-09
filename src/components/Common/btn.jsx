import React from "react";


const Btn = ({ title="",btnClass="", icon="",onClickBtn  }) =>{
   
    return(
        <>
            <button onClick={onClickBtn} className={"text-xs border-2 h-8 border-gray-400 transition ease-out duration-300 rounded-full " + btnClass}>
                {title}
                {icon ?
                <svg fill="none" stroke="currentColor" className="w-4 mx-auto" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d={icon}></path>
                </svg> : ""}
            </button>

        </>
    )
}

export default Btn;