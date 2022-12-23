import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    console.log(amounts);

    const income =
        amounts
            .filter((item) => item < 0)
            .reduce((accumulator, item) => (accumulator += item), 0) *
        -(1).toFixed(2);
    console.log(income);

    const expense =
        amounts
            .filter((item) => item > 0)
            .reduce((accumulator, item) => (accumulator += item), 0) *
        -(1).toFixed(2);
    console.log(expense);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    );
};
