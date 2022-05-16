import React from 'react'
import styles from './style.module.css'

const Header = () => {
  return (
        <header>
        <ul className={styles.mainMenu}>
        <li><a href="/">Main</a></li>
        <li><a href="/locations/">Locations</a></li>
        </ul>
        </header>
  )
}

export default Header
