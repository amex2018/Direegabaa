import React from 'react'
import Button from '../Common Component/Button';
const SpecialBanner = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-center py-16 md:py-30 lg:py-36  mx-auto" style={{backgroundImage: `url("/Images/furniture-banner.jpg")`}}>
                <div className="container md:ml-40 ml-14">
                <h1 className="lg:text-6xl md:text-3xl font-medium text-gray-900 md:mb-12 ">Best Collection for <br /> Home furniture</h1>
                <p className="">Note that the development build is not optimized.<br/>
                  To create a production build, use npm run build.</p>
                <div className=" mt-12">
                  <Button 
                  link="/"
                  style="bg-primary border border-primary text-white w-48 p-3 rounded-md transition  hover:bg-transparent hover:text-primary"
                  btntitle="Shop Now"
                  />
                   
                 </div>
                </div>
        </div>
    )
}

export default SpecialBanner