import React from 'react'
import NavBar from '../../childComponents/NavBar'

const DefaultLayout = ({ children }) => {
  return (
    <div className={'wrapper'}>
      <NavBar></NavBar>
      
    </div>
  )
}

export default DefaultLayout