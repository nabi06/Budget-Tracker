import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Info from './Components/Info'

function App() {
  const [count, setCount] = useState()
  const[income,setIncome] = useState(0)
  const[expense,setExpense] = useState(0)
  const [balance,setBalance] = useState(0)
  const[valueType,setValueType]=useState()

  return (
    <div className='main'>
      <section className='cont'>
          <div className="main-cont">
            <div className="small-cont">
            <h1>Expense Tracker </h1>
            </div>
            <img src='./public/icon.png'/>
          </div>
          
      </section>
      <Header count={count}
        setCount={setCount}
        income={income} setIncome={setIncome}
        expense={expense} setExpense={setExpense}
        balance={balance} setBalance={setBalance}
        valueType={valueType} setValueType={setValueType}
        />
        <Info
        count={count}
        setCount={setCount}
        income={income} setIncome={setIncome}
        expense={expense} setExpense={setExpense}
        balance={balance} setBalance={setBalance}
        valueType={valueType} setValueType={setValueType}
        />
    </div>
  )
}

export default App
