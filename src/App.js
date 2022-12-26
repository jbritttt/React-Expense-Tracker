import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Wooden Floor",
    amount: 104.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e6",
    title: "New T.V",
    amount: 554.12,
    date: new Date(2019, 7, 25),
  },
  {
    id: "e7",
    title: "Parking Ticket",
    amount: 30.00,
    date: new Date(2019, 8, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
