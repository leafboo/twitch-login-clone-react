import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'

export default function BoxContainer() {
  return(
    <div className='box-container'>
        <div className='box'>
            <Header />
            <Body />
        </div>
    </div>
  )
}
