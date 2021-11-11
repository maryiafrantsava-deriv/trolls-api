import React from 'react'
import styles from './Header.module.scss'



const Header:React.FC=()=>{

return (


<div id="main-nav" className={styles.nav}>
  <div className={`${styles.topNav} ${styles.flexContainer}`} >

    <div className={styles.topNavContainer}>
      <a className= {styles.a} href="https://deriv.com">Deriv website</a>
      <a className= {styles.a} href="https://deriv.com/about">About us</a>
      <a className= {styles.a} href="https://deriv.com/contact-us">Contact us</a>
    </div>
  </div>

  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <img
        id="hamburger"
        className={styles.hamburger}
        alt="Hamburger menu"
        src="hamburger_menu.svg"
        width="16"
        height="16"
      />
      <a className={styles.flexContainer} href="{{ branch }}/">
        <img
          className="logo"
          alt="Deriv Logo"
          src="deriv.svg"
          width="180"
          height="73"
        />
        <h1 className={styles.branding}>API</h1>
      </a>
      <nav id="navbar" className={`${styles.flexContainer} ${styles.navbar}`}>
        <a id="" href="{{ branch }}/">Home</a>
        <a id="docs" href="{{ branch }}/docs/">Documentation</a>
        <a id="playground" href="{{ branch }}/playground/">API Playground</a>
      </nav>
    </div>
  </header>
</div>

)
}

export default Header 