import React,{useState} from 'react'
import { SearchIcon, ShoppingCartIcon, MenuIcon, UserCircleIcon, ChatIcon, CurrencyDollarIcon } from '@heroicons/react/solid'
import { MdLocalShipping } from 'react-icons/md';
const Header = () => {
     const [open, setOpen] = useState(false)
    return (
        <header className="grid grid-cols-3 bg-white shadow-md z-50 top-0 sticky p-5 md:px-10">
        <div className="cursor-pointer h-10 relative flex items-center my-auto">
         <MdLocalShipping/>
       
        </div>
        <div className="border rounded-full flex items-center py-2 shadow-md">
         <input className="flex-grow bg-transparent px-5 outline-none text-sm text-gray-600 placeholder-gray-400 " type="text" placeholder="Start Searching..." />
         <SearchIcon className="h-8 rounded-full bg-red-500 cursor-pointer p-2 hidden lg:inline-flex text-white md:mx-2" />
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-600">
         <p className="hidden md:inline cursor-pointer">Become a host</p>
        
         <ShoppingCartIcon className="h-8 cursor-pointer" />
       
    
         <button className="flex items-center relative cursor-pointer border-2 space-x-2 rounded-full p-2" onClick={()=>setOpen(!open)}>
          <MenuIcon className="h-8" />
          <UserCircleIcon className="h-8" />   
           { open &&
            <div className="absolute bg-white shadow-md mt-3 py-2 right-0 w-56 top-full divide-y-2 divide-dashed">
           <a className="flex items-center px-4 py-3 hover:bg-gray-100 transition " href="/">
            <ShoppingCartIcon className="h-8 w-8"/>
            <span className="ml-6 font-roboto text-sm text-gray-500">Cart</span>
           </a>
           <a className="flex items-center px-4 py-3 hover:bg-gray-100 transition " href="/">
            <ChatIcon className="h-8 w-8"/>
            <span className="ml-6 font-roboto text-sm text-gray-500">Messages</span>
           </a>
           <a className="flex items-center px-4 py-3 hover:bg-gray-100 transition " href="/">
            <CurrencyDollarIcon className="h-8 w-8"/>
            <span className="ml-6 font-roboto text-sm text-gray-500">Orders</span>
           </a>
           <a className="flex items-center px-4 py-3 hover:bg-gray-100 transition " href="/">
            <UserCircleIcon className="h-8 w-8"/>
            <span className="ml-6 font-roboto text-sm text-gray-500">Sign In</span>
           </a>
          </div> 
        }       
         </button>
         
        </div>
        </header>
    )
}

export default Header