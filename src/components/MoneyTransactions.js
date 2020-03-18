import React, { useState, useEffect} from 'react'
import Button from './Button'
import styles from './MoneyTransactions.module.css'

const users = [
  {"id": 1, "name": "Sepp"},
  {"id": 2, "name": "Mike"}
]

const list = [
  {"id": 1, "creditorId": 1, "debitorId": 2, "amount": 10.00, "paidAt": null },
  {"id": 2, "creditorId": 3, "debitorId": 1, "amount": 11.20, "paidAt": "2000-01-01T00:00:00+01+00" },
]

const TextInput = () => {
  return (
    <div className={styles.headline}><h1> I owe somebody Somebody owes me</h1></div>
  )
}

const SelectInput = ({users, onChange}) => {
  return (
    <>
    <label>User</label>
    <select onChange={ (evt) => onChange(evt.target.value)}>
      {users.map( (user) => {
        return( <option key={ user.id }>{ user.name }</option> )
      })}
    </select>
    </>
  )
}

const DecimalInput = ({amount, onChange}) => {

  return (
    <>
    <label>Amount</label>
    <input 
      type="number" 
      step="0.1" 
      value = {amount}
      onChange={ (evt) => onChange(evt.target.value) } >
    </input>
    </>
  )
}

const MoneyTransactionCreate = () => {

  //get variable and a function to manipulate variable
  const [creditorId, setCreditor] = useState('')
  const [debitorId, setDebitor] = useState('');
  const [amount, setAmount] = useState('');
 
  return (
    <div className={styles.create}>
      <form className={styles.createForm} onSubmit= { (evt) => {
          evt.preventDefault();
          alert(JSON.stringify({debitorId, creditorId, amount}))
      }}>
        <Button>Logout</Button>
        <TextInput/>
        <SelectInput 
          users = {users}
          onChange = {setDebitor} />
        <DecimalInput
          amount={amount}
          onChange={setAmount}/>
        <Button>
          Create
        </Button>
      </form>
    </div>
  )
}

const MoneySingleTransaction = ({list}) => {
 
  return ( 
    <>
    { list.map( (debt) => {
      return (
        <div className={styles.entry}>
          <form className ={styles.form} key={debt.id} onSubmit= { (evt) => {
              evt.preventDefault();
              alert(JSON.stringify( {id: debt.id, paidAt: new Date().toISOString()} ))
          }}>
            <p className={`${styles.text} ${debt.paidAt !== null ? styles.paid : "" } `}>{ debt.creditorId }</p>
            <p className={`${styles.text} ${debt.paidAt !== null ? styles.paid : "" } `}>{ debt.amount }</p>
            {debt.paidAt == null ? <Button>Paid</Button> : ""} 
          </form> 
        </div>
        )
      }
    )}
    </>
  )
}

const MoneyTransactionList = () => {

  return (
    <div className= {styles.list}>
      <MoneySingleTransaction list = {list} />
    </div>
  )
}

const MoneyTransactions = () => {

  return (
    <div className="money-transaction">
      <MoneyTransactionCreate/>
      <MoneyTransactionList/>
    </div>
  )
}

export default MoneyTransactions
