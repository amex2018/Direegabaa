import React from 'react'
import {IoMdStarOutline} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const CardProduct = props => {
    return (
        <div className="bg-white overflow-hidden shadow-md rounded-sm">
            <div className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
               <img src="/Images/sofa-1.png" alt="product images" className="w-full" />
            </div>
            <div className="pt-2 px-3 py-4">
               <a href="/" className="mb-3 font-medium text-2xl uppercase text-gray-900 transition hover:text-primary">
               {props.productname}</a>
               <div className="flex items-baseline font-roboto space-x-3 mb-1">
                <span className="text-lg font-extrabold text-primary">{props.price}</span>
                <span className="text-sm text-gray-400 line-through">${props.discountprice}</span>
               </div>
               <div className="flex items-center">
               <div className="flex gap-1 font-bold text-lg text-yellow-400">
                <IoMdStarOutline/>
                <IoMdStarOutline/>
                <IoMdStarOutline/>
                <IoMdStarOutline/>
                <IoMdStarOutline/>
               </div>
               </div>
               <div className="mt-4 bg-primary font-roboto text-white hover:bg-primary transition text-center rounded">
                 <button onClick={props.add} className="flex gap-3 p-3 items-center uppercase">
                <AiOutlineShoppingCart className="text-lg"/>
                    Add to Cart
                 </button>
               </div>
            </div>
        </div>
    )
}

export default CardProduct
