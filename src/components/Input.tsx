import React from 'react'

type Props = {
  name: keyof formData
  inputType: 'email' | 'text'
  defaultValue: 'Your Email' | 'Your Name'
  onChange: (event: React.ChangeEvent<HTMLInputElement>)
}

const Input: React.FC<Props> = ({inputType, defaultValue}) => {
  return(
    <div className='input-box'>
      <input
      type={inputType}
      defaultValue={defaultValue}
      />
    </div>
  )
}

export default Input