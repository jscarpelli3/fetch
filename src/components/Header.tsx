import React from 'react'
import logo from './../images/bark.png'
import Button from './Button'

type Props = {
  loggedIn: boolean
}

const Header: React.FC<Props> = ({ loggedIn }) => {
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('LogOut clicked')
  }

  return (
    <div className="header-box">
      <img className="header-logo" src={logo} alt="go fetch logo" />
      {loggedIn ? (
        <Button onClickBool={true} buttonType='button' buttonText="LogOut" handleLogout={handleLogout} />
      ) : (
        <h3>Please Log In</h3>
      )}
    </div>
  )
}

export default Header
