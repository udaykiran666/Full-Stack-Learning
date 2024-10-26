import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

function App(){
    const [number, setnumber] = useState("");
    const [otpinput, setotpinput] = useState(false);
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRef = useRef([]);

    useEffect(()=>{
        if(otpinput){
            inputRef.current[0].focus();
        }
    },[otpinput])

    const handleChange=(element, index)=>{
        const newOtp = [...otp];
        newOtp[index] = element.target.value;
        setOtp(newOtp);

        if(element.target.value && index<3){
            inputRef.current[index+1].focus();
        }
    };

    const keyDown=(element, index)=>{
        if(element.key == "Backspace" ){
            element.preventDefault()
            const newOtp = [...otp];
            if(otp[index]){
                newOtp[index]=""
                setOtp(newOtp);
            }
            else if(index>0){
                inputRef.current[index-1].focus();
            }
        }
    }

    return(
        <div>
            <h1>Login via OTP</h1>
            {!otpinput ? (
                <div>
                    <input 
                    type="text" 
                    value={number}
                    placeholder="Enter your mobile number"
                    onChange={(event)=>setnumber(event.target.value)}
                    ></input><br></br>
                    <button onClick={()=>setotpinput(true)}>Send OTP</button>
                </div>
            ):(
                <div>
                    <div>
               
                    {otp.map((data, index)=>(
                            <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(event)=>handleChange(event, index)}
                        onKeyDown={(event)=>keyDown(event, index)}
                        ref={(event)=>(inputRef.current[index] = event)}
                        ></input>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default App;