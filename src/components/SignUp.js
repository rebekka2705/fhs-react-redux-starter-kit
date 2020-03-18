import React, { useState, useEffect} from 'react'
import Button from './Button'

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

const SignUp = ({formtype}) => {

  //get variable and a function to manipulate variable
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
 

  return (

    <form onSubmit= { (evt) => {
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
        Submit
      </Button>
    </form>
  )
}

export default SignUp
