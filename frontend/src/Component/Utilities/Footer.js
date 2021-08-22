import React from 'react'
import Button from '../Common Component/Button'
import {GrMapLocation} from 'react-icons/gr'
import {FiPhone} from 'react-icons/fi'
import {ImEnvelop} from 'react-icons/im'
import {FaFacebook, FaTwitter, FaTelegram, FaYoutube} from 'react-icons/fa'
function Footer() {
    return (
        <div className="container bg-footer mx-auto">
            <div className="grid grid-cols-2 gap-10 justify-center items-center  p-16">

              <div className="flex-col">
                <h1 className="text-black font-extrabold text-3xl pb-5">Diree<span className="text-primary">Gabaa</span></h1>
                <p className="text-textColor">Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage.</p>
                <br/><span className="text-textColor">NEWSLETTER</span>
                 <div className="flex-1 border-primary py-5">
                  <input type="email" placeholder="Email Address." className="h-12 border shadow-xl rounded-tl rounded-bl border-primary px-2 focus:ring-primary focus:ring-2 focus:border-transparent focus:outline-none " />
                  <Button       
                  link="/"
                  style="bg-primary border border-primary text-white w-36 p-3 rounded-tr rounded-br transition  hover:bg-transparent hover:text-primary"
                  btntitle="Subscribe"
                   />
                  </div> 
                 
              </div>
              <div className="grid grid-cols-3">
              <div className="flex-col">
                <h1 className="text-textColor pb-5">MY ACCOUNT</h1>
                 <ul>
                  <li><a className="text-textColor hover:text-primary">Orders</a></li>
                  <li><a className="text-textColor hover:text-primary">Wishlist</a></li>
                  <li><a className="text-textColor hover:text-primary">Track Order</a></li>
                  <li><a className="text-textColor hover:text-primary">Manage Account</a></li>
                  <li><a className="text-textColor hover:text-primary">Return Order</a></li>
                 </ul>
              </div>
              <div className="flex-col">
               <h1 className="text-textColor pb-5">INFORMATION</h1>
                 <ul>
                  <li><a className="text-textColor hover:text-primary">About Us</a></li>
                  <li><a className="text-textColor hover:text-primary">Return Policy</a></li>
                  <li><a className="text-textColor hover:text-primary">Terms & condition</a></li>
                  <li><a className="text-textColor hover:text-primary">Privacy Policy</a></li>
                  <li><a className="text-textColor hover:text-primary">FAQ</a></li>
                 </ul>
              </div>
              <div className="flex-col">
               <h1 className="text-textColor pb-5">CONTACT</h1>
                 <ul>
                  <li className="flex gap-3">
                    <GrMapLocation/>
                    <span className="text-sm">Bole Addis Ababa, Ethiopia</span>
                  </li>
                  <li className="flex gap-3">
                    <FiPhone/>
                    <span className="text-sm">+251935299008</span>
                  </li>
                   <li className="flex gap-3">
                    <ImEnvelop/>
                    <span className="text-sm">direegabaa@gmail.com</span>
                  </li>
                 </ul>
                 <div className="flex flex-row gap-5 mt-6">
                    <FaFacebook className="text-primary text-3xl hover:text-blue-700"/>
                    <FaTwitter className="text-primary text-3xl hover:text-blue-500" />
                    <FaTelegram className="text-primary text-3xl hover:text-blue-400" />
                    <FaYoutube className="text-primary text-3xl hover:text-red-600" />
                 </div>
              </div>
              
              </div>
              
            </div>
            <div className="bg-secondary flex justify-between p-5">
               <span className="text-white">© DireeGabaa - All Rights Reserved</span>
               <img src="/Images/payment-method.png" className="w-80" alt="footer"/>
            </div>
        </div>
    )
}

export default Footer









