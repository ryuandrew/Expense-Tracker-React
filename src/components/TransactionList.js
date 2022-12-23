import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); // can pull out anything from our global context using useContext hook.

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(
                    (
                        transaction // for each transaction we want to output the list items
                    ) => (
                        <Transaction
                            key={transaction.id} // need a unique key for a list below
                            transaction={transaction} // pass in as a prop to know which transaction to render
                        />
                    )
                )}
            </ul>
        </>
    );
};
