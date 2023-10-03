import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    onAddExpense(expenseData);
    setShowNewExpenseForm(false);
  };

  let content = (
    <button onClick={() => setShowNewExpenseForm(true)}>
      Add New Expense
    </button>
  );
  if (showNewExpenseForm) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setShowNewExpenseForm={setShowNewExpenseForm}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
}

export default NewExpense;
