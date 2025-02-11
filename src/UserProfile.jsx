import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import users from './assets/users.json'
import { AuthContext } from './context/AuthContext'
import Head from './Head'
import { Link } from 'react-router-dom'
import profilestyles from './styles/UserProfile.module.css'
import { ThemeContext } from './context/ThemeContext'

function userProfile() {
  const {userList} = useContext(AuthContext)
  const {theme} = useContext(ThemeContext)
  const { username } = useParams()
  const user = userList.find(user => user.username === username)
  return (
    <>
    <Head>
     <Link className={profilestyles.link} to={`/user/${username}`}>{username}</Link>
      <Link className={profilestyles.link}to={'/Home'}>Back</Link>

    </Head>

    <div className={`${theme === 'Light'?profilestyles.mainlight:profilestyles.maindark}`}>
        <h1>Profile</h1>
        <h2>Username : {user.username}</h2>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
    </div>
    </>
  )
}

export default userProfile
