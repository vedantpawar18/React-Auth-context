import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const HomePage = () => {
  return (
    <div>
        <h1>Name: Janet Wor</h1>
        <img src="https://reqres.in/img/faces/2-image.jpg" alt="" />
        <h6>You've Logged in...</h6>
    </div>
  )
}

export default HomePage