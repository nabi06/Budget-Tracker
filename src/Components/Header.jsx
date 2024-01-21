import { useEffect } from "react";
function Header({count,setCount,income,setIncome,expense,setExpense,balance,setBalance,valueType,setValueType}){
    useEffect(() => {
        if (valueType === 'Income') {
          setBalance(income-expense);
        } else if (valueType === 'Expense') {
          setBalance(income-expense);
        } else if (valueType === 'Loan') {
            setBalance(income-expense);
          } 
        // This effect should run only when valueType, income, or expense changes.
      }, [valueType, income, expense, setBalance]);
    return(
        <>
        <div className="header">
            <div className="head-cont">
                <h2>Your Balance ! </h2>
                <p>{balance}</p>
            </div>
            <div className="header-cont">
                <div className="head1">
                    <h3>Income</h3>
                    <p>{income}</p>
                </div>
                <div className="head2">
                    <h3> Expense</h3>
                    <p>{expense}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header