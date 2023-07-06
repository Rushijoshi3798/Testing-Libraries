import React from 'react'
import styles from "./Button.module.css"

const Button = ({children , color, size}) => {
  return (
    <button className={`${styles[color]} ${styles[size]}`}>{children}</button>
  )
}

export default Button;
