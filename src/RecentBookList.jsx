import React, { useContext } from 'react'
import { BooklistContext } from './context/BooklistContext'

import Card from './Card';
import { BookContext } from './context/BookContext';

function RecentBookList() {
  const {recentbooklist, setRecentBooklist} = useContext(BooklistContext);
  const {books} = useContext(BookContext)

  return (
    <>
    <h2>Recent Book List</h2>
    {
        recentbooklist.length === 0?(<h1>no recent books</h1>):(
            recentbooklist.map((book, index) => (
                <Card key={index} book={book} />
                ))

            )
    }
      
    </>
  )
}

export default RecentBookList
