
import { useState , useEffect} from "react"
import axios from "axios";
export const  Usedebounce = ()=>{
    const [value, setValue] = useState('')
    const [users, setUsers] = useState([])
    const [loading, isLoading] = useState(true)
    
    useEffect(()=>{
        console.log('came here 1')
        const fetchData = async() =>{
            const response = await axios.get("http://localhost:3000/api/v1/user/bulk/?filter=" + value);
            const data = response.data.user;
            setUsers(data);
            isLoading(false);
        }
        const time = setTimeout(() => {
            if(value){fetchData();}
        }, 1000);
        return ()=>{
            clearTimeout(time)
        }
    },[value])
    console.log('came here 2')
    return(
        <div>
            <div>{console.log('came here 3')}</div>
            <input 
                type="text" 
                placeholder="Enter the keyword.."
                onChange={(event)=>{setValue(event.target.value)}}>

            </input>
            <div>
                {!loading && users && value ? users.map((user)=>(
                    <div key={user._id}>{user.userName} - {user.email} - {user.firstName} - {user.lastName}</div>
                )): "Loading..."}
            </div>
        </div>
    )
}
