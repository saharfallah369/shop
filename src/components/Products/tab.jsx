import { useState } from "react";
import OurProductCat from "./ourProductCat";
import style from "@/styles/landing.module.css"

const TabsComponent = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <div className="w-[60%] mx-[20%] grid grid-cols-12 gap-2 mt-10">
                <button onClick={() => setOpenTab(1)} className={style.OurProCat}>مردانه</button>
                <button onClick={() => setOpenTab(2)} className={style.OurProCat}>زنانه</button>
                <button onClick={() => setOpenTab(3)} className={style.OurProCat}>بچگانه</button>
                <button onClick={() => setOpenTab(4)} className={style.OurProCat}>ورزشی</button>
                <button onClick={() => setOpenTab(5)} className={style.OurProCat}>زیبایی و سلامت</button>
                <button onClick={() => setOpenTab(6)} className={style.OurProCat}>برندها</button>
            </div>
                

            <div className="p-3 mt-6 container max-sm:w-full max-sm:clear-both max-sm:overflow-x-hidden">
                <div className={openTab === 1 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    {" "}
                    <OurProductCat />
                </div>
                <div className={openTab === 2 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    <OurProductCat />
                </div>
                <div className={openTab === 3 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    <OurProductCat />
                </div>
                <div className={openTab === 4 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    <OurProductCat />
                </div>
                <div className={openTab === 5 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    <OurProductCat />
                </div>
                <div className={openTab === 6 ? " grid gap-8 grid-cols-12" : "hidden"}>
                    <OurProductCat />
                </div>
            </div>
        </div>
    );
}

export default TabsComponent;