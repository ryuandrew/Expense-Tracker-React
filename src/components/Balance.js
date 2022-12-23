import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // each transaction is an object with an id, text, and amount
    const amounts = transactions.map((transaction) => transaction.amount);
    console.log(amounts);

    const total =
        amounts.reduce((accumulator, item) => (accumulator += item), 0) *
        -(1).toFixed(2); // use reduce to add all together
    console.log(total);
    return (
        <>
            <h4>YOUR BALANCE</h4>
            <h1>${total}</h1>
        </>
    );
};
