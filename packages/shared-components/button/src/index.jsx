import React from 'react'

const Button = ({ children, color, ...props }) => {
  return (
    <button style={{
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: color || '#12329b',
      textAlign: 'center',
      letterSpacing: '.5px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '2px',
      lineHeight: '36px',
      padding: '0 16px',
      textTransform: 'uppercase'
    }} {...props}>
      {children}
    </button>
  )
}

export default Button