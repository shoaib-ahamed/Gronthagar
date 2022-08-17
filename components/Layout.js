import React from 'react'
import Footer from './Footer'
import Modal from './Modal'
import Navbar from './Navbar'
import Notify from './Notify'

const Layout = ({children}) => {
    return (
        <div className="layout">
        <Navbar />
        <div className='container'>
            <Notify />
            <Modal/>
            {children}
        </div>
        <Footer/>
        </div>
    )
}

export default Layout