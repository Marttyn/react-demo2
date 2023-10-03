import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
