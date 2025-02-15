import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {CreateUserSchema} from '@udaykiran666/medium-common'
import axios from "axios"
import { SIGNIN_BACKEND_URL, SIGNUP_BACKEND_URL } from "../config"
export const Auth = ({type}: {type:"signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<CreateUserSchema>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    async function sendRequest(){
        try{
            const response  = await axios.post(`${type === "signup" ? SIGNUP_BACKEND_URL : SIGNIN_BACKEND_URL}`, postInputs)
            const jwt = JSON.stringify(response.data.message);
            {type === "signin" ? localStorage.setItem("token", jwt) : null};
            navigate("/blog")
        }
        catch(e){
            alert(e)
        }
    }

    return(
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className="font-bold text-3xl">
                        {type === "signup" ? "Create an account" : "Login to account"}
                    </div>
                    <div className="text-slate-400 flex pl-2">
                        {type === "signup" ? "Already Have an account?" : "Don't have an account?"}
                        <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup" }>{type === "signup"? "Login" : "Create"}</Link>
                    </div>
                </div>
                <div className="pt-8">
                {type === "signup" ? <LableInput label="Name" placeholder="Uday Kiran" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                
                }}/> : null}
                <LableInput label="Email" placeholder="uday@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                
                }}/>
                <LableInput label="Password" type={"password"} placeholder="password" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                
                }}/>
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
                dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>

                </div>
            </div>

            </div>
        </div>
    )
}

interface LabelInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LableInput({label, placeholder, onChange, type}: LabelInputType){
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-blac pt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder} required />
        </div>
    )
}