import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
// any global state goes in this object
const initialState = {
    transactions: [
        { id: 1, text: "Costco", amount: -20 },
        { id: 2, text: "Deposit", amount: 2500 },
        { id: 3, text: "Fred Meyer", amount: -70 },
        { id: 4, text: "Gas", amount: -30 },
    ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, deleteTransaction }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
