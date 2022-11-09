import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
// a react component is just a js function
const ExpenseItem = ({ date, title, amount }) => {
  // const { date, title, amount } = props;
  return (
    // only have one root element
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
