import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import users from'./assets/users.json'
import loginStyle from './styles/Login.module.css'
import { AuthContext } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import { ThemeContext } from './context/ThemeContext'
import { use } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user, login, userList}=useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const Navigate = useNavigate()
    function validateUser(e){
        e.preventDefault()
        const user = userList.find((u)=>u.username === username && u.password === password);
        console.log("user", user)
        localStorage.setItem('activeuser',JSON.stringify(user))
        if(user){
            login(user.username, user)
            // console.log('User logged in')
            Navigate('/home')
            }
        else{
            console.log('Invalid username or password')
            }
        
    }
  return (
    <>
    <Head>
    </Head>
    <div className={loginStyle.main}>
        <div className={loginStyle.logindiv}>
            <h1 className={`${loginStyle.heading} ${theme==='Dark'?loginStyle.headdark:loginStyle.headlight}`}>Login to react book app</h1>
            <label htmlFor="u_name" className={`${loginStyle.label} ${theme === 'Dark'?loginStyle.labeldark:loginStyle.labellight}`}>Username : </label> <br />
            <input type="text" name="user" id="u_name" 
            placeholder='Enter username' className={`${loginStyle.input} ${theme === 'Dark'?loginStyle.inputdark:loginStyle.inputlight}`}
            onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            <label htmlFor="p_word" className={`${loginStyle.label} ${theme === 'Dark'?loginStyle.labeldark:loginStyle.labellight}`}>Password : </label> <br />
            <input type="password" name="pw" id="p_word" 
            placeholder='Enter Password' className={`${loginStyle.input} ${theme === 'Dark'?loginStyle.inputdark:loginStyle.inputlight}`}
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <button type="submit" className={`${loginStyle.login} ${theme === 'Dark'?loginStyle.buttondark:loginStyle.buttonlight}`} onClick={validateUser}>Login</button>
            <p className={loginStyle.p}>Don't have an account ?  
            <Link to="/signup" className={loginStyle.sign}> Sign up</Link>
            </p>
        </div>
    </div>
    
    </>
  )
}

export default Login
