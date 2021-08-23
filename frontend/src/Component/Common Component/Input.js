import React from 'react'

function Input(props) {
    return (
        <div className="mx-auto pt-5">
            <label htmlFor={props.htmlfor} className="font-sans text-xs text-gray-500">{props.label}</label>
            <input 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
            className="w-full h-12 mt-1  px-4 placeholder-gray-500 placeholder-opacity-75 rounded-md
             shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border-2 border-blue-200 border-transparent
             text-gray-700 text-sm font-sans
            "
            />
        </div>
    )
}

export default Input
