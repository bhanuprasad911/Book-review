import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const BookContext = createContext();

export const BookContextProvider=({children})=>{
  console.log("📢 BookContextProvider Mounted!"); // Check if this logs

 const [books, setBooks] = useState(()=>{
  console.log("📂 Loading books from localStorage...");

  const storedBooks = localStorage.getItem('books');
  return storedBooks ? JSON.parse(storedBooks) : []
 });
 useEffect(() => {
  console.log("🔄 useEffect triggered - Fetching books...");

    fetch('https://www.dbooks.org/api/recent', {mode:'cors'})
      .then((response) => {
        console.log("📡 API Response Status:", response.status)
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
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