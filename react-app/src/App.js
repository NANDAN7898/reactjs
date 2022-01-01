import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 264.95,
    date: new Date(2021, 9, 8),
    id: Math.random().toString(),
  },
  {
    title: "Toilet paper",
    amount: 150.25,
    date: new Date(2020, 2, 10),
    id: Math.random().toString(),
  },
  {
    title: "New Desk",
    amount: 5000.2,
    date: new Date(2022, 9, 15),
    id: Math.random().toString(),
  },
  {
    title: "New TV",
    amount: 10000.2,
    date: new Date(2021, 6, 8),
    id: Math.random().toString(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
