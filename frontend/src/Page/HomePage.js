import React from 'react'
import Header from '../Component/Utilities/Header'
import SpecialBanner from '../Component/Utilities/SpecialBanner'
import ServicesType from '../Component/ServicesType'
import Product from '../Component/Product'
import FooterBanner from '../Component/Utilities/FooterBanner'
import Footer from '../Component/Utilities/Footer'
const HomePage = () => {
    return (
        <div>
            <Header />
            <SpecialBanner/>
            <ServicesType/>
            <Product />
            <FooterBanner />
            <Footer/>
        </div>
    )
}

export default HomePage