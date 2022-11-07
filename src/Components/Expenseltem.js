import './ExpenseItem.css';
// a react component is just a js function
const ExpenseItem = ({ title, amount, date }) => {
  return (
    // only have one root element
    <div className="expense-item">
      <div>{date.toISOString}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
