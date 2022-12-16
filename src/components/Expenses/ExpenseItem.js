import { useState } from 'react'


import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

function ExpenseItem(props) {

console.log('expense item evaluated by react')
const [title, setTitle] = useState(props.title)


const clickHandler = () =>{

  setTitle('updated')
  console.log(title)
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
