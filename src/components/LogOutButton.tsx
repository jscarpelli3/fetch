import React, { MouseEventHandler } from 'react'

type Props = {
  handleLogout: MouseEventHandler<HTMLButtonElement>
  buttonText: string
}

const LogOutButton: React.FC<Props> = ({handleLogout, buttonText}) => {
  return(
    <div className='button-box'>
      <button className='button'
        onClick={handleLogout}
        >
        {buttonText}
      </button>
    </div>
  )
}

export default LogOutButton