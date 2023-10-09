import React ,{useEffect,useState} from "react";
import Btn from '@/components/common/btn';

const GoToTop = () =>{
    
    const [toTop,setToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll" , () =>{
            if(window.scrollY > 500 ){
                setToTop(true);
            }else{
                setToTop(false);
            }
        })
    } , [])

    const ScrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <>
            {toTop && (
                <div onClick={ScrollUp} className="hover:bg-slate-600  transition duration-300 fixed bottom-9 bg-white max-sm:left-10 left-24 w-36 p-1 rounded-full text-center cursor-pointer border-2 z-40 border-gray-300">
                    
                    <span className="float-left text-gray-400 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </span>
                    <span className="mt-[-20px] text-gray-400">رفتن به بالا</span>
                </div>
            )}
        </>
    )


}

export default GoToTop;