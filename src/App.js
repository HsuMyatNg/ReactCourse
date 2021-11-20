import React,{useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [{
  id : "e1",
  title : "Toilet Paper",
  amount : 94.12,
  date : new Date(2021,7,6),
},
{
  id : "e2",
  title : "New TV",
  amount : 799.49,
  date : new Date(2021,3,12),
},
{
  id : "e3",
  title : "Car Insurance",
  amount : 294.67,
  date : new Date(2020,4,1),
},
{
  id : "e4",
  title : "New Desk (Wood)",
  amount : 450,
  date : new Date(2021,1,10),
},
];
const App = () => {
  const [expenses,subExpenses] = useState(DUMMY_EXPENSES);
  const addExpensesHandler = (expense) => {
    subExpenses((preventExpenses) => {
      return[expense, ...preventExpenses];
    });
  }
 return(
  <div>
      <NewExpense onAddExpense = {addExpensesHandler} />
     <Expense expenses = {expenses} ></Expense>
  </div>
 );
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2",{},"Let's get started !"),
//   React.createElement("Expense")
// );
}

export default App;
