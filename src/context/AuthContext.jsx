import React,{ createContext, Children} from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [activeuser, setactiveUser] = useState(JSON.parse(localStorage.getItem('activeuser')))
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('user')))
    const [userList, setUserlist ] = useState(JSON.parse(localStorage.getItem("userlist")) || [])

    useEffect(() => {
        localStorage.setItem("userlist", JSON.stringify(userList));
    }, [userList]);

    useEffect(()=>{
        localStorage.setItem("activeuser", JSON.stringify(activeuser));
        },[activeuser])
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user));
        },[user])
    
    const login = (username, user) =>{
        setactiveUser(username);
        setUser(user);
    }

    
    const logout = () =>{
        localStorage.removeItem('activeuser');
        setUser(null)
    }
    


return(
    <AuthContext.Provider value={{user, login, logout, userList, setUserlist}}>
        {children}
    </AuthContext.Provider>
)
}
