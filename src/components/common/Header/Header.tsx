import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const navigation = [
  { id: "deriv-com", title: "Deriv website", path: "https://deriv.com" },
  { id: "deriv-com-about", title: "About us", path: "https://deriv.com/about" },
  { id: "deriv-com-contact-us", title: "Contact us", path: "https://deriv.com/contact-us" },
  { id: "/", title: "Home", path: "/" },
  { id: "docs", title: "Documentation", path: "/docs" },
  { id: "playground", title: "API Playground", path: "/playground" },
];

const Header: React.FC = () => {
  return (
    <div id="main-nav" className={styles.nav}>
      <div className={`${styles.topNav} ${styles.flexContainer}`}>
        <div className={styles.topNavContainer}>
          {navigation.map(
            ({ id, title, path }, i) =>
              i < 3 && (
                <Link key={id} href={path}>
                  <a className={styles.a}>{title}</a>
                </Link>
              )
          )}
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
          <Link href={navigation[0].path}>
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
            {navigation.map(({ id, title, path }, i) =>
              i > 2 ? (
                <Link key={id} href={path}>
                  <a id={id}>{title}</a>
                </Link>
              ) : null
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
