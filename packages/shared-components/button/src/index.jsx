import React from 'react'

const Button = ({ children, color }) => {
  return (
    <button style={{
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: color || '#26a69a',
      textAlign: 'center',
      letterSpacing: '.5px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '2px',
      lineHeight: '36px',
      padding: '0 16px',
      textTransform: 'uppercase'
    }}>
      {children}
    </button>
  )
}

export default Button