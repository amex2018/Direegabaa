import React from 'react'
import {IoIosArrowForward }from 'react-icons/io'
const TitleSection =(props)=> {
    return (
            <div className="flex py-6 text-black m-3.5 justify-between items-center">
            <span className="text-gray-900 font-roboto text-2xl font-bold uppercase">{props.title}</span>
            <a href={props.link} className="flex items-center text-red-600 transition-all">{props.showmorelink} 
             <IoIosArrowForward/>  
             </a>
            </div>
        
    )
}

export default TitleSection
