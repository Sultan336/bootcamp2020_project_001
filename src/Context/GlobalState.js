import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State
const initialState = {
    transaction: [
        { id: 1, text: 'Cat', amount: -500 },
        { id: 1, text: 'Salary', amount: 1000 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transaction
    }}>
        {children}
    </GlobalContext.Provider>);
}