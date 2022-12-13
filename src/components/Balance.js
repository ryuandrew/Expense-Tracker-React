import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    console.log(amounts);

    const total = amounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);
    console.log(total);
    return (
        <>
            <h4>YOUR BALANCE</h4>
            <h1>${total}</h1>
        </>
    );
};
