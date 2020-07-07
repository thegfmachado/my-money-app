import '../common/template/dependencies'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'
import Footer from '../common/template/Footer'
import Routes from './Routes'

export default props => (
    <BrowserRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
)