import React from 'react'

function PromotProduct() {
    return (
        <div className="container bg-bg_card p-10 m-4 rounded-sm">
          <div className="flex gap-5 justify-between">
             <div className="flex flex-col">
              <span className="text-primary text-2xl font-bold mb-4">30% Offer</span>
              <a className="text-black text-2xl mb-2 font-bold" href="/">Free Shipping</a>
              <span className="mb-4" >Attractive Natural Furniture</span>
              <button className="bg-primary py-3 text-white rounded border-2 border-primary hover:bg-transparent hover:text-primary transition-all">Shop Now</button>
             </div>
             <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
             <img src="/Images/sofa-2.png" alt="images" className="w-52 h-30" />
             </div>
          </div>
        </div>
    )
}

export default PromotProduct
