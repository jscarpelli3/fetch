import React from 'react'
import Input from './Input'
import Button from './Button'

type Props = {
  loggedIn: boolean
}

const LogForm: React.FC<Props> = ({ loggedIn }) => {

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('i submitted')
  }

  return (
    <div className="logform-box">
      <form className="log-form" onSubmit={handleLogin}>
        <Input type="text" defaultValue="name" />
        <Input type="email" defaultValue="email" />
        <Button onClickBool={false} buttonType='submit' buttonText="LogOut" />
      </form>
    </div>
  )
}

export default LogForm
