import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
// any global state goes in this object
const initialState = {
    transactions: [
        { id: 1, text: "Costco", amount: 20 },
        { id: 2, text: "Deposit", amount: -2500 },
        { id: 3, text: "Fred Meyer", amount: 70 },
        { id: 4, text: "Gas", amount: 30 },
    ],
};

// create context
// export to bring this into other files into components
export const GlobalContext = createContext(initialState);

// provider component
// for other components to have access to our global state
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); // need access to state and dispatch(to call a reducer action)

    // actions to make calls to our reducers
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions, // to access the object from any component that we requested from using useConext which is another react hook
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
