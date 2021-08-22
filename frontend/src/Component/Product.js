import React from 'react'
import CardProduct from './Utilities/CardProduct';
import TitleSection from './Utilities/TitleSection'
import PromotProduct from './PromotProduct';
const Product = () => {
    return (
        <>
        <div className="flex justify-center items-center">
         <PromotProduct/>
          <PromotProduct/>
        </div>
       
          <TitleSection
         title="RECOMENDED FOR YOU"
         link="/"
         showmorelink="Show More"
        />
        <div className="container">
           <div className="grid grid-cols-4 gap-3">
           <CardProduct 
            discountprice="800"
            add="/"
           />
           <CardProduct />
           <CardProduct />
           <CardProduct />
           <CardProduct />
           <CardProduct />
           </div>
            
        </div>
      </>        
    )
}

export default Product
