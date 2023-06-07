import React from 'react'

type Props = {
  type: string
  defaultValue: string
}

const Input: React.FC<Props> = ({type, defaultValue}) => {
  return(
    <div className='input-box'>
      <input
      type={type}
      defaultValue={defaultValue}
      />
    </div>
  )
}

export default Input