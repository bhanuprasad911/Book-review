import React, { useContext } from 'react'
import singupStyle from './styles/Signup.module.css'
import { useState } from 'react'
import {Navigate, useNavigate, Link } from 'react-router-dom';
import Head from './Head';
import { AuthContext } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';

function Signup() {
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const {userList, setUserlist} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    // const [success, setSuccess] = useState(false)
    const navigate=useNavigate()
    function signUser(e){
        e.preventDefault()
        if(!name || !username || !password){
            alert("Please fill all the fields")
        }
        else if(password != confirmPassword){
            console.log('passwords does not match')
        }
        else{
            const user = {"name":name, "username":username,"email":email , "password":password}
            setUserlist([...userList,user])
            alert("Signup successful")
            navigate("/login")

            
            }
    }
    return (
    <>
    <Head>
        {/* <h1>Book review app</h1> */}
    </Head>
    <div className={singupStyle.main}>
        <div className={singupStyle.Signup}>
            <h1 className={`${singupStyle.signupnote} ${theme==='Dark'?singupStyle.headdark:singupStyle.headlight}`}>Sign in into react book app</h1>
        <label htmlFor="nameInput" className={`${singupStyle.label} ${theme==='Dark'?singupStyle.labeldark:singupStyle.labellight}`}>Name : </label> <br /><input value={name} type="text" name="name" id="nameInput" className={`${singupStyle.input} ${theme==='Dark'?singupStyle.inputdark:singupStyle.inputlight}`}onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <br/>
        <label htmlFor="usernameInput" className={`${singupStyle.label} ${theme==='Dark'?singupStyle.labeldark:singupStyle.labellight}`}>Username : </label> <br /><input value={username} type="text" name="u_name" id='usernameInput' className={`${singupStyle.input} ${theme==='Dark'?singupStyle.inputdark:singupStyle.inputlight}`}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <label htmlFor="emailInput" className={`${singupStyle.label} ${theme==='Dark'?singupStyle.labeldark:singupStyle.labellight}`}>Email : </label> <br /><input value={email} type="text" name="mail" id='emailInput' className={`${singupStyle.input} ${theme==='Dark'?singupStyle.inputdark:singupStyle.inputlight}`}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <br/>
        <label htmlFor="passwordInput" className={`${singupStyle.label} ${theme==='Dark'?singupStyle.labeldark:singupStyle.labellight}`}>Password : </label> <br /><input value={password} type="password" name="p_word" id='passwordInput' className={`${singupStyle.input} ${theme==='Dark'?singupStyle.inputdark:singupStyle.inputlight}`}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <br/>
        <label htmlFor="cpwInput" className={`${singupStyle.label} ${theme==='Dark'?singupStyle.labeldark:singupStyle.labellight}`}>Confirm Password : </label>
        <br/>
        <input value={confirmPassword} type="password" name="c_pword" id='cpwInput' className={`${singupStyle.input} ${theme==='Dark'?singupStyle.inputdark:singupStyle.inputlight}`} onChange={(e)=>{
            setConfirmPassword(e.target.value)
        }}/>
        <button type="submit" className={`${singupStyle.submit} ${theme==='Dark'?singupStyle.buttondark:singupStyle.buttonlight}`} onClick={signUser}>Signup</button>
        <p className={singupStyle.loginPrompt}>Already registered?
            <Link className={singupStyle.loginlink} to="/login">Login</Link>
        </p>
        </div>
    </div>
    
    </>
  )
}

export default Signup
