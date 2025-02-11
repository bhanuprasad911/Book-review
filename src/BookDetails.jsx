import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BookContext, BookContextProvider } from './context/BookContext';
import { useContext } from 'react';
import bookStyle from './styles/Bookdetails.module.css'
import Head from './Head';
import { AuthContext } from './context/AuthContext';
import { BooklistContext } from './context/BooklistContext';
import { useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';

function BookDetail() {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const [count, setCount] = useState(0)
  const [review, setReview] = useState("")
  const {user} = useContext(AuthContext)
  const {recentbooklist, setRecentBooklist} = useContext(BooklistContext)
  const {theme} = useContext(ThemeContext)
  const[reviewList, setReviewList]=useState([])
  const navigate = useNavigate();

  // const rev = review

  const book = books.find(book => book.id === id);
  // console.log(user)
  useEffect(() => {
    if (book && !recentbooklist.some(b => b.id === book.id)) {
      const updatedList = [...recentbooklist, book];
      setRecentBooklist(updatedList);
    }
  }, [book, recentbooklist, setRecentBooklist]);
  
  // Separate useEffect to update localStorage when recentbooklist changes
  useEffect(() => {
    localStorage.setItem('recentbooks', JSON.stringify(recentbooklist));
    console.log("Updated recentbooklist:", recentbooklist);
  }, [recentbooklist]);  // Now it only updates when recentbooklist changes
  
  return (
    <>
      <Head>
      {/* <h1>React book app</h1> */}
      <Link className={bookStyle.link} to={`/user/${user.username}`}> {user.username} </Link>
      <button onClick={()=>{navigate('/home')}}className={bookStyle.backbutton}>Back</button>

      </Head>
    <div className={bookStyle.bookcontainer}>
      <div className={bookStyle.bookdetailsbody}>
      <div className={bookStyle.bookimage}>
        <img className={bookStyle.bookimg} src={book.image} alt="cover" />
        </div>
        <div className={bookStyle.bookdetailsandreveiw}>
          <div className= {`${bookStyle.bookdetails}`}>
          <h1 className={`${theme === 'Light' ? bookStyle.light : bookStyle.dark}`}>{book.title}</h1>
          <h2 className={`${theme === 'Light' ? bookStyle.light : bookStyle.dark}`}>{book.subtitle}</h2>
          <p className={`${theme === 'Light' ? bookStyle.light : bookStyle.dark}`}>{book.authors}</p>
          </div>
        <div className={bookStyle.reviewcontainer}>
        <p className={`${bookStyle.reviewnote} ${theme === 'Light' ? bookStyle.light : bookStyle.dark}`}>Leave a review</p>
        <input type="text" placeholder='Enter review' name='rev' value={review} className={`${bookStyle.reviewinput} ${theme === 'Light' ? bookStyle.inputlight : bookStyle.inputdark}`} onChange={(e)=>{
        setReview(e.target.value)
      }}/>
      <button onClick={(e)=>{
        e.preventDefault()
        setReviewList([...reviewList,review])
        setReview('')
        setCount(count+1)
      }} className={`${bookStyle.reviewsubmit} ${theme === 'Light' ? bookStyle.buttonlight : bookStyle.buttondark}`}>Submit</button>
      <p className={bookStyle.review}>{reviewList[count-1]}</p>
      </div>
        </div>
      

      </div>
      
       
    </div>
    </>
  );
}

export default BookDetail;

