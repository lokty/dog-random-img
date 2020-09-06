import React, { useState } from 'react'
import axios from 'axios'
import './App.css'


const App = () => {
  const [ dogSrc, setDogSrc ] = useState('')
  const getNewPuppy = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(result => {
        setDogSrc(result.data.message)
      })
  }
  const DogImg = () => {
    if (!dogSrc) {
      return null
    }
    return (
      <img src={dogSrc} style={{objectFit: 'contain'}} alt="foo" />
    )
  } 
  return(
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <button onClick={getNewPuppy}>show  me a puppy</button>
      <DogImg />
    </div>
  )
}

export default App
