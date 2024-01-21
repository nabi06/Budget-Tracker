import { useState,useEffect } from "react"
import Transaction from "./Transaction"
function Info({count,setCount,income,setIncome,expense,setExpense,balance,setBalance,valueType,setValueType}){
    const[val,setVal]=useState(0)
    const[display,setDisplay]=useState()
    const[transactions,setTransactions]=useState([
        {type:'Income',amount:0},
        {type:'Expense',amount:0},
        {type:'Loan',amount:0}
    ])
    useEffect(() => {
        if (valueType === 'Income') {
          setVal(income);
        } else if (valueType === 'Expense') {
          setVal(expense);
        } else if (valueType === 'Loan') {
            setVal(expense);
          } 
        // This effect should run only when valueType, income, or expense changes.
      }, [valueType, income, expense, setBalance]);
    console.log(expense,"info")
    const handleclick=()=>{
        setDisplay(!display)
    }   
    const addTransaction=(newTransaction)=>{
        setTransactions(prev=>[...prev,newTransaction])
    }
    return(
        <>
         <div className="Info">
            <h1> Transaction History <button onClick={handleclick}><img src="./public/icon2.png"/></button></h1> 
                {display && (
                    <div className="Main-info">
                    <div className="info-cont">
                    {transactions.map((transaction,index)=>{
                            <div key={index} className="transss">
                            <div className="left-cont">
                                <p>{index}</p>
                            </div>
                            <div className="right-cont">
                            <p>${transaction.amount}</p>
                            </div>
                            </div>
                            
                        })}
                    </div>
                    
                </div>
                )}
                <Transaction
                count={count}
                setCount={setCount}
                income={income} setIncome={setIncome}
                expense={expense} setExpense={setExpense}
                balance={balance} setBalance={setBalance}
                valueType={valueType} setValueType={setValueType}
                onAddTransaction={addTransaction}
                />
            </div>
        </>
    )
}
export default Info