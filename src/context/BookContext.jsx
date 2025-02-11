import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const BookContext = createContext();

export const BookContextProvider=({children})=>{
 const [books, setBooks] = useState(()=>{
  const storedBooks = localStorage.getItem('books');
  return storedBooks ? JSON.parse(storedBooks) : []
 });
 useEffect(() => {
    fetch('https://www.dbooks.org/api/recent')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.books || []);
        localStorage.setItem('books', JSON.stringify(data.books || []));
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);
     return(
        <BookContext.Provider value={{books, setBooks}}>
            {children}
        </BookContext.Provider>
     )
}