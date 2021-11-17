import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expneseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        };
        props.onAddExpense(expneseData);

    };

    return(
    <Card className = "new-expense">
       <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} ></ExpenseForm>
    </Card>);
};
export default NewExpense;
