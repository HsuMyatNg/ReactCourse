import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
   const [title,subtitle] = useState(props.title);
    const clickResult = () => {
        subtitle ("Update !!!");
    };
    // document.getElementById("root").addEventListener("click",function(){});
    return(
        <Card className="expense-item">
           <ExpenseDate date = {props.date} />
            <div className="expense-item__description" >
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            <button onClick={clickResult}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;