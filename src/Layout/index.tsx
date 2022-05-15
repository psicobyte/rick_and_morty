import Header from './Header'
import Footer from './Footer'
import React from 'react'
interface Props {
    // eslint-disable-next-line no-undef
    children: JSX.Element
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
        <div>
            <Header />
            <main>
            {children}
            </main>
            <Footer />
        </div>
  )
}

export default Layout
