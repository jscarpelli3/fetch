import React, { MouseEventHandler } from 'react'

type Props = {
  onClickBool: true | false
  handleLogout?: MouseEventHandler<HTMLButtonElement>
  buttonText: string
  buttonType: 'button' | 'submit' | undefined
}

const Button: React.FC<Props> = ({onClickBool, handleLogout, buttonText, buttonType}) => {
  return(
    <div className='button-box'>
      <button className='button'
        type={buttonType}
        onClick={onClickBool ? handleLogout : undefined}
        >
        {buttonText}
      </button>
    </div>
  )
}

export default Button