import React from 'react'

const Button = ({ children }) => {
  return (
    <button style={{
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#26a69a',
      textAlign: 'center',
      letterSpacing: '.5px',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  )
}

export default Button