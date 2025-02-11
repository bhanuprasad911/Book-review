import React,{ createContext, useEffect } from "react";
import { useState } from "react";


export const BooklistContext = createContext();
export const BooklistProvider = ({ children }) => {
    const [recentbooklist, setRecentBooklist] = useState(JSON.parse(localStorage.getItem('recentbooks') || []));
    useEffect(() => {
        // Convert recentbooklist to a string to compare with existing localStorage data
        const storedBooks = localStorage.getItem("recentbooks");
        const newBooksString = JSON.stringify(recentbooklist);

        // Only update localStorage if the value has changed
        if (storedBooks !== newBooksString) {
            localStorage.setItem("recentbooks", newBooksString);
        }
    }, [recentbooklist]);

    return(
        <BooklistContext.Provider value={{ recentbooklist, setRecentBooklist }}>
            {children}
        </BooklistContext.Provider>
    )

}


