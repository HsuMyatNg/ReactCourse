import React,{useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    const [enterTitle,subenterTitle] = useState("");
    const [enterAmount,subenterAmount] = useState("");
    const [enterDate,subenterDate] = useState("");

    const titleChangeHandler = (event) => {
        subenterTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        subenterAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        subenterDate(event.target.value);
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const expneseData = {
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate),
        };
        props.onSaveExpenseData(expneseData);
        subenterTitle("");
        subenterAmount("");
        subenterDate("");
    }
    return(
    <form onSubmit = {submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type="text"
                value = {enterTitle}
                onChange = {titleChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"
                value = {enterAmount}
                 onChange = {amountChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-1-1"
                 max="2022-12-31"
                value = "{enterDate}"
                 onChange = {dateChangeHandler} />
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};
export default ExpenseForm;