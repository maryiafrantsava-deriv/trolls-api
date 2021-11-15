import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;