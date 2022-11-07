import './ExpenseItem.css';
// a react component is just a js function
const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    // only have one root element
    <di v className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </di>
  );
};

export default ExpenseItem;
