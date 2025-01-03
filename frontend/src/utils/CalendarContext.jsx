import React,{ useState } from 'react';
import { createContext } from 'react'

export const CalendarContext = createContext();

const CalendarProvider = ({children}) => {
    const [showModal,setShowModal]=useState(false) 
    // alert(showModal)
    return (
        <CalendarContext.Provider value={{showModal,setShowModal }}>
          {children}
        </CalendarContext.Provider>
      );
}

export default CalendarProvider;