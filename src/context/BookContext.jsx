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
 const [fetchTrigger, setFetchTrigger] = useState(false);

 useEffect(() => {
   console.log("🚀 Initial Mount - useEffect Not Running Yet...");
   setTimeout(() => {
     setFetchTrigger(true);
   }, 1000); // 🔴 Delay fetch by 1s
 }, []);
 
 useEffect(() => {
   if (!fetchTrigger) return; // 🔴 Only run fetch AFTER timeout
 
   console.log("🔄 useEffect triggered - Fetching books...");
 
   fetch("https://www.dbooks.org/api/recent", { mode: "cors" })
     .then((response) => {
       console.log("📡 API Response Status:", response.status);
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
 
 }, [fetchTrigger]); // 🔴 useEffect will now re-run when `fetchTrigger` changes
 

     return(
        <BookContext.Provider value={{books, setBooks}}>
            {children}
        </BookContext.Provider>
     )
}