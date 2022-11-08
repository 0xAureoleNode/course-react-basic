import ExpenseItem from '../ExpenseItem/Expenseltem';
import './Expenses.css';
const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </div>
  );
};

export default Expenses;
