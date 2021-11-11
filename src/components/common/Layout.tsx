import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'

const Layout:any = ({ children } :any) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
);

  export default Layout;