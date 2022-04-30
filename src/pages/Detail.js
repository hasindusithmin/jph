import '../css/Profile.css'
import {useEffect,useState} from "react";
import Profile from "../componets/Profile";
export default function Detail() {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        const id = sessionStorage.getItem('id')
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=>res.json())
                .then(data=>{
                    setUser(data);
                })
    },[])
    return (
        <>
            {user && <Profile user={user}/>}
        </>
    )
}