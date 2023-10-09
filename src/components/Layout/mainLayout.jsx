import React from "react";
import Header from '@/components/Header';
import Footer from "@/components/Footer"
const MainLayout = (page , title) =>{
    return(
        <>
            
            <Header title={title} />
                <main>
                    {page}
                </main>
            <Footer />
        </>

    )
}

export default MainLayout;