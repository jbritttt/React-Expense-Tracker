import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
return expense.date.getFullYear().toString() === filteredYear

  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

    <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
       
      </Card>
    </div>
  );
}

export default Expenses;
