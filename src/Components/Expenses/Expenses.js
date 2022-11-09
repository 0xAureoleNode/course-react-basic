import ExpenseItem from '../ExpenseItem/Expenseltem';
import './Expenses.css';
import Card from '../Card/Card';
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </Card>
  );
};

export default Expenses;
