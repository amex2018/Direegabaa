import React from 'react'
import Button from '../Common Component/Button'
import Heading from '../Common Component/Heading'
import Input from '../Common Component/Input'
function LoginForm() {
    return (
        <div className="bg-gray-200 bg-opacity-30 w-1/2 mx-auto my-28 p-10 rounded-lg">
             <Heading
              heads="Login"
             />
            <Input
               htmlfor="email"
               label="Email *"
               type="email"
               name= "email"
               placeholder="example@gmail.com" 
               value=""
               onChange=""
            />
            <Input
               htmlfor="password"
               label="Password *"
               type="password"
               name= "password"
               placeholder="" 
               value=""
               onChange=""
            />
            <Button 
             btntitle="Login" 
             style="bg-primary border border-primary text-white w-full p-3 rounded-md transition mt-10"
            />
        </div>
    )
}

export default LoginForm
