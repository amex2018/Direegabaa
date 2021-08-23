import React from 'react'

function Heading(props) {
    return (
        <div className="text-center p-4">
            <h3 className="text-center text-secondary font-sans text-3xl font-extrabold">{props.heads}</h3>
        </div>
    )
}

export default Heading
