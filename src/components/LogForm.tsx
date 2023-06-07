import React from 'react'
import Input from './Input'


type Props = {
  loggedIn: boolean;  
  }


const LogForm: React.FC<Props> = ({loggedIn}) => {
  return(
    <div className='logform-box'>
      <form className='log-form'>
      <Input type='text' defaultValue='name'/>
      <Input type='email' defaultValue='email'/>
      <button className='submit-form-button' type='submit'> Submit</button>
      </form> 
    </div>
  )
}

export default LogForm