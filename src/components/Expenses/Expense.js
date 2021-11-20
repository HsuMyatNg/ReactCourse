import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";
const Expense = (props) =>{
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
    return (
        <Card className = "expenses"> 
        <ExpensesFilter
          selected = {filterYear}
          onChangeFilter = {filterChangeHandler}
        />  
        <ExpensesChart expenses = {filterExpenses}/>
         <ExpensesList items = {filterExpenses}></ExpensesList>
        </Card>
      );

}
export default Expense;