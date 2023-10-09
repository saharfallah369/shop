import React,{ useEffect , useState } from "react";
import styleImg from "@/assents/images/841.png"
import styleImg2 from "@/assents/images/1.png"
import Image from "next/image";
import Star2 from "@/assents/images/star2.png";
import click from "@/assents/images/Group4865.png";

const SliderTop = () =>{
    
    const sliders = ["841.png" , "1.png" ,"841.png" , "1.png" ];
    const [bigSliderIndex , setBigSliderIndex] = useState(1);
    const [smallSliderIndex , setSmallSliderIndex] = useState(0);
    const [slider , setSlider] = useState(false);

    useEffect(()=>{
        const sliderInteval = setInterval(() => {
            const indexOfLastSlide = sliders.length - 1;
            setBigSliderIndex((prev) => {
                if(prev === indexOfLastSlide) return 0;
                return prev + 1;
            });
            setSmallSliderIndex((prev) => {
                if (prev === indexOfLastSlide) return 0;
                return prev + 1;
            });

        }, 3000)
        return () => clearInterval(sliderInteval);
    })

    useEffect(() => {
        
        }, []);

    return(
        <>
            <div className="col-span-6 relative justify-center grid grid-cols-12 max-sm:col-span-12 max-sm:mt-80">
                <div className="col-span-8 max-sm:col-span-12 h-[450px]">
                    <Image src={click} alt="" className="absolute"/>
                    <div className="border-black  border-2 w-[80%] m-auto rounded-full">
                        <Image src={"/Image/"+sliders[bigSliderIndex]} width="300" height={400} alt="" className={"rounded-full z-50 w-full mr-[-10px] mt-[-15px]"} />
                    </div>
                </div>

                <div className="col-span-4 relative h-[200px] max-sm:hidden">
                    <Image src={Star2} className="absolute right-[-10px] animate-pulse" alt="" />
                    <div className="mt-14">
                        
                        <Image src={"/Image/"+sliders[smallSliderIndex]} className={slider ? "transform scale-150 translate-x-48 z-30 duration-300 delay-3000 rounded-full" : "rounded-full"} width={160} height={230} alt="" />
                        
                    </div>

                    {/* slider counter */}
                    <div className="text-left font-bold w-full">
                        <p className="float-right text-right w-[50%]"><small>0</small>{ bigSliderIndex + 1}</p>
                        <p className="float-right w-[50%]">04</p>
                    </div>
                    <div className="border-2 grid grid-cols-4 border-gray-300 h-2 mt-3">
                        <div className={"bg-black h-1 col-span-"+ (bigSliderIndex + 1) }></div>
                    </div>
                    {/* slider counter */}

                </div>
            </div>
        </>
    )
}

export default SliderTop;