import React from 'react'
import Button from '../Common Component/Button';
const SpecialBanner = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-center py-36" style={{backgroundImage: `url("/Images/furniture-banner.jpg")`}}>
                <div className="container">
                <h1 className="lg:text-6xl md:text-3xl font-medium text-gray-900 mb-12 ml-40">Best Collection for <br /> Home furniture</h1>
                <p className="ml-40">Note that the development build is not optimized.<br/>
                  To create a production build, use npm run build.</p>
                <div className="ml-40 mt-12">
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