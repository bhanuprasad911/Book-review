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
  console.log("🔄 useEffect triggered - Fetching books..."); // This should log!

  fetch("https://www.dbooks.org/api/recent", { mode: "cors" }) // Force CORS mode
    .then((response) => {
      console.log("📡 API Response Status:", response.status); // Debug API call
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("📚 Parsed Books Data:", data.books);
      setBooks(data.books || []);
      localStorage.setItem("books", JSON.stringify(data.books || []));
    })
    .catch((error) => {
      console.error("❌ Fetch Error:", error);
    });
}, []);
     return(
        <BookContext.Provider value={{books, setBooks}}>
            {children}
        </BookContext.Provider>
     )
}