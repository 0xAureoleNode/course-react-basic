import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/Expenseltem';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        ;
      </ul>
    </div>
  );
};

export default ExpensesList;
