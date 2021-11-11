import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutPropsType> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
