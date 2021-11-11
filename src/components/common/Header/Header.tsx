import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div id="main-nav" className={styles.nav}>
      <div className={`${styles.topNav} ${styles.flexContainer}`}>
        <div className={styles.topNavContainer}>
          <Link href="https://deriv.com">
            <a className={styles.a}>Deriv website</a>
          </Link>
          <Link href="https://deriv.com/about">
            <a className={styles.a}>About us</a>
          </Link>
          <Link href="https://deriv.com/contact-us">
            <a className={styles.a}>Contact us</a>
          </Link>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Image
            id="hamburger"
            className={styles.hamburger}
            alt="Hamburger menu"
            src="/hamburger_menu.svg"
            width="16"
            height="16"
          />
          <Link href="{{ branch }}/">
            <a className={styles.flexContainer}>
              <Image
                className="logo"
                alt="Deriv Logo"
                src="/deriv.svg"
                width="180"
                height="73"
              />
              <h1 className={styles.branding}>API</h1>
            </a>
          </Link>
          <nav
            id="navbar"
            className={`${styles.flexContainer} ${styles.navbar}`}
          >
            <Link href="{{ branch }}/">
              <a id="">Home</a>
            </Link>
            <Link href="{{ branch }}/docs/">
              <a id="docs">Documentation</a>
            </Link>
            <Link href="{{ branch }}/playground/">
              <a id="playground">API Playground</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
