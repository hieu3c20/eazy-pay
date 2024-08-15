import React from 'react'
import './style.scss'

const TextDisplaying = (props) => {
  const { textContent, fontSize, fontWeight, color, margin } = props

  return (
    <div className="text-content" style={{fontSize, fontWeight, color, margin}}>{textContent}</div>
  )
}

export default TextDisplaying