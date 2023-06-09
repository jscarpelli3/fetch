import React from 'react'


type Props = {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}

const Card: React.FC<Props> = ({id, img, name, age, zip_code, breed}) => {


  return(
    <div className='card-box'>
      <h3 className='card-name'>{name}</h3>
      <img
      className='card-img' 
      src={img} 
      alt={`Picture of a ${breed} dog`}/>
      <h4 className='card-age'>Age: {age}</h4>
      <h4 className='card-breed'>Breed: {breed}</h4>
      <h4 className='card-loc'>Location: {zip_code}</h4>
    </div>
  )
}

export default Card