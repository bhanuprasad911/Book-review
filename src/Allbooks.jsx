import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from './context/BookContext'
import { AuthContext } from './context/AuthContext'
import allbooks from './styles/Allbooks.module.css'
import { useNavigate } from 'react-router-dom'
import Card from './Card.jsx'
import TryLogin from './TryLogin'
import Head from './Head.jsx'

function Allbooks() {
    const {books} = useContext(BookContext)
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        logout();
        navigate('/');
    }

    if (!user) {
        return (
            <TryLogin/>
        )
    }
    
  return (
    <>
    <Head>
    <Link className={allbooks.link} to={`/user/${user.username}`}> {user.username} </Link>
    <button onClick={handleLogout} className={allbooks.button}>Logout</button>
    </Head>
    <div className={allbooks.container}>
    {
        books.map((book) => (
            
            <Card
            key={book.id}
            title={book.title}
            author={book.author}
            img={book.image}
          >
            <Link to={`/book/${book.id}`} className={allbooks.readmore}>Read more</Link>
          </Card>
            ))
    }
    </div>
    </>
  )
}

export default Allbooks
