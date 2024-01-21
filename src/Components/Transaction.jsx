function Transaction({count,setCount,income,setIncome,expense,setExpense,valueType,setValueType,onAddTransaction}){
    const handlechange=(event)=>{
        setValueType(event.target.value)
        console.log("ee",valueType)
        
    }
    const hadnleinput=(event)=>{
         const chagne=parseFloat(event.target.value)
        setCount(chagne)
        console.log(count)

    }
    const handlesubmit=()=>{
        valueType==="Income"?setIncome(prev=>prev+count):
        valueType==="Expense"?setExpense(prev=>prev+count):
        valueType==="Loan"? setExpense(prev=>prev+count):
        ('')

        const newTransaction = {
            type: valueType,
            amount: valueType === "Income" ? count :
                    valueType === "Expense" ? count : // Assuming expenses reduce the count
                    valueType === "Loan" ? count : // Assuming loans reduce the count
                    0 // Default value if none of the above conditions are true
          };
        onAddTransaction(newTransaction)
        setCount('')
        
        
    }
    console.log("trans,",expense)
    return(
        <>
        <div className="trans-cont">
            <h4>Add Transaction</h4>
            <div className="trans1">
                <h3>Type
                    <select name="amount" placeholder="" onChange={handlechange}>
                        <option value="Loan"  >Loan</option>
                        <option value="Income" >Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    
                </h3>
            </div>
            <div className="trans1">
                <h4>Amount
                <input type="number" placeholder="Enter Amount " value={count}
                onChange={(event)=>{hadnleinput(event)}}
                />
                <button onClick={handlesubmit}>Budget</button>
                </h4>
                
                
            </div>
        </div>
        </>
    )
}
export default Transaction