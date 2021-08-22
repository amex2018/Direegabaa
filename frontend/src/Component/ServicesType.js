import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import {GiTakeMyMoney} from 'react-icons/gi'
import {BiSupport} from 'react-icons/bi'
const  ServicesType =() =>{
    return (
        <div className="container py-14">
           <div className="grid-cols-3 gap-6 py-4 justify-center items-center grid w-9/12 mx-auto">
              <div className="border border-primary p-4 rounded flex space-x-6">
                 <MdLocalShipping className="text-primary w-10 h-10" />   
                 <div>
                 <h3 className="text-base font-semibold">Free shipping</h3>
                 <p className="text-sm">Orders over $200</p>
                 </div> 
              </div>
              <div className="border border-primary p-4 rounded-sm flex space-x-6">
                 <GiTakeMyMoney className="text-primary w-10 h-10" />   
                 <div>
                 <h3 className="text-base font-semibold">Money Returns</h3>
                 <p className="text-sm">30 Days money return</p>
                 </div> 
              </div>
              <div className="border border-primary p-4 rounded-sm flex space-x-6">
                 <BiSupport className="text-primary w-10 h-10" />   
                 <div>
                 <h3 className="text-base font-semibold">24/7 Support</h3>
                 <p className="text-sm">Customer support</p>
                 </div> 
              </div>
              
           </div>
        </div>
    )
}
export default ServicesType