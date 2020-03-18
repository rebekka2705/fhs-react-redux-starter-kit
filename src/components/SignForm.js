import React, { useState, useEffect} from 'react'
import Button from './Button'
import styles from './SignForm.module.css'

const FormInput = ({value, onChange, labelText, inputType = 'text'}) => {

  return (
    <>
      <label>{labelText}</label>
      <input 
        type= {inputType}
        value={value}
        onChange={ (evt) => onChange(evt.target.value) }
      />
    </>
  )
}

const SignForm = ({form}) => {

  //get variable and a function to manipulate variable
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className={styles.signform}>
      <form className={styles.form} onSubmit= { (evt) => {
          evt.preventDefault();
          alert(JSON.stringify({username, password}))
      }}>

        <FormInput
          labelText={'Username'}
          value = {username}
          onChange = {setUsername}/>
        
        <FormInput
          labelText={'Passwort'}
          value = {password}
          onChange = {setPassword}
          inputType ={'password'}  
        />  
      
        <Button>
          {form === 'Sign Up' ? 'Sign Up' : 'Sign In'}
        </Button>

        <Button>
          {form === 'Sign Up' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>
    </div>
  )
}

export default SignForm
