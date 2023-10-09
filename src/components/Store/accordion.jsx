import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import CostSlider from "@/components/Store/slider";
import Colors from "@/components/Store/colors";


const Icon = ({ id, open }) => {
    return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${id === open ? "rotate-180 text-black" : " text-gray-400 "} top-2 left-0 absolute h-5 w-5 transition-transform`}
    >
        <path strokeLinecap="round" className="" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    );
}

const AccordionCustomIcon = () => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);



    const colors = [
        {id:1 , colorTitle:"قهوه ای" , colorCode:"bg-[#74493C]"},
        {id:2 , colorTitle:"سفید" , colorCode:"bg-[#FFFFFF]"},
        {id:3 , colorTitle:"مشکی" , colorCode:"bg-[#272727]"},
        {id:4 , colorTitle:"طوسی" , colorCode:"bg-[#C5C5C5]"},
        {id:5 , colorTitle:"آبی" , colorCode:"bg-[#4B8CD8]"},
        {id:6 , colorTitle:"سبز" , colorCode:"bg-[#00CC8F]"},
        {id:7 , colorTitle:"قرمز" , colorCode:"bg-[#E2233A]"},
        {id:8 , colorTitle:"زرد" , colorCode:"bg-[#F5CA20]"},
        {id:9 , colorTitle:"صورتی" , colorCode:"bg-[#EF7BA6]"},
        {id:7 , colorTitle:"بنفش" , colorCode:"bg-[#B57BEF]"},
        {id:8 , colorTitle:"نارنجی" , colorCode:"bg-[#EE8A52]"},
        {id:9 , colorTitle:"طلایی" , colorCode:"bg-[#E7B66C]"},
    ]




    return (
    <>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className={` ${open === 1 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(1)}>سایز</AccordionHeader>
            <AccordionBody className={` ${open === 1 ? "block" : "hidden"}`}>
                hiiii
            </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className={` ${open === 2 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(2)}>جنس پارچه</AccordionHeader>
            <AccordionBody>

            </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className={` ${open === 3 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(3)}>فروشنده</AccordionHeader>
            <AccordionBody>
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 4 } icon={<Icon id={4} open={open} />}>
            <AccordionHeader className={` ${open === 4 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(4)}>طرح</AccordionHeader>
            <AccordionBody>
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 5 } icon={<Icon id={5} open={open} />}>
            <AccordionHeader  className={` ${open === 5 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(5)}>یقه</AccordionHeader>
            <AccordionBody>
            </AccordionBody>
        </Accordion>
        
        <Accordion open={open === 6 } icon={<Icon id={6} open={open} />}>
            <AccordionHeader className={` ${open === 6 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(6)}>کشور تولید کننده</AccordionHeader>
            <AccordionBody>
            </AccordionBody>
        </Accordion>


        <Accordion open={ open === 7 } icon={<Icon id={7} open={open} />}>
            <AccordionHeader className={` ${open === 7 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(7)} >قیمت</AccordionHeader>
            <AccordionBody className={` ${open === 7 ? "block" : "hidden"}`}>

                <CostSlider/>
                <div className="grid grid-cols-12 gap-3">
                    <p className="col-span-6 border-2 p-2 text-center font-bold font-shabnam border-black rounded-full">
                        150,000
                        <small>تومان</small>
                    </p>

                    <p className="col-span-6 border-2 p-2 text-center font-bold font-shabnam border-black rounded-full">
                        950,000
                        <small>تومان</small>
                    </p>
                </div>
            </AccordionBody>
        </Accordion>

        <Accordion open={ open === 8 } icon={<Icon id={8} open={open} />}>
            <AccordionHeader className={` ${open === 8 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(8)} >رنگ</AccordionHeader>
            <AccordionBody className={` ${open === 8 ? "block" : "hidden"}`}>
                <Colors colors={colors} />
            </AccordionBody>
        </Accordion>


        <Accordion open={ open === 9 } icon={<Icon id={9} open={open} />}>
            <AccordionHeader className={` ${open === 9 ? "text-black font-bold" : "text-gray-400"} text-sm text-right font-shabnam `} onClick={() => handleOpen(9)} >برند</AccordionHeader>
            <AccordionBody className={` ${open === 9 ? "block" : "hidden"}`}>
                
            </AccordionBody>
        </Accordion>



    </>
);
}

export default AccordionCustomIcon;