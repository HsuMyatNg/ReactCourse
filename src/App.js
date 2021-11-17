import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
 return(
  <div>
      <NewExpense />
     <Expense></Expense>
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
