import MainLayout from '@/components/Layout/MainLayout'
import Hero from "@/components/HeroSection"
import Products from '@/components/Products/productCat'
import NewProducts from '@/components/Products/newProducts'
import DisCount from '@/components/Products/disCount'
import OurProduct from '@/components/Products/ourProduct'
import Ads from "@/components/Products/disCountAds"
import Article from '@/components/Article'
import Brand from '@/components/brand'
import ScrollButton from '@/components/common/GoToTop'
import Loading from "@/components/Loading"
import { useEffect, useState } from 'react'
import TestSlider from '@/components/Products/testSlider'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000);
  }, []);
  
  return (
    <main>
      {loading ? <>
        <Loading />
      </> : <>
        <div className="w-screen" >
          <Hero/>
          <Products />
          {/* <NewProducts /> */}
          <TestSlider />
          <DisCount />
          <OurProduct />
          <Ads />
          <Article />
          <Brand />
          <ScrollButton />
        </div>
      </>}

    </main>
  )
}

Home.getLayout = (page) => MainLayout(page, " صفحه اصلی");