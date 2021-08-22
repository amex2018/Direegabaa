import React from 'react'
import Button from '../Common Component/Button'
function OfferBanner() {
    return (
        <div className="container p-14">
            <div className="bg-footer my-5 mx-3.5 p-8 flex flex-row gap-16 rounded">
               
                <img src="/Images/mobile-view.png" alt="Images" className="w-2/6" />
                <div className="mt-20">
                 <h2 className="text-textColor font-extrabold text-3xl pb-5">Download RAFCART App Now!</h2>
                 <span>Shopping fastly and easily more with our app. Get a link to download the app on your phone</span>
                  <div className="flex-1 border-primary my-12">
                  <input type="email" placeholder="Email Address." className="h-12 border shadow-xl rounded-tl rounded-bl border-primary px-2 focus:ring-primary focus:ring-2 focus:border-transparent focus:outline-none " />
                  <Button       
                  link="/"
                  style="bg-primary border border-primary text-white w-36 p-3 rounded-tr rounded-br transition  hover:bg-transparent hover:text-primary"
                  btntitle="Subscribe"
                   />
                  </div> 
                 
                 <div className="flex-row flex items-center gap-4">
                   <a href="/"><img className="w-36" src="/Images/googleplay.png" alt="Google play store" /></a>
                   <a href="/"><img className="w-36" src="/Images/appstore.png" alt="app store" /></a>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default OfferBanner
