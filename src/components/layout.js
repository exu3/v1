import React from 'react'
import Header from './header'
import Footer from './footer'
import { ChakraProvider } from "@chakra-ui/react"

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <ChakraProvider>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {props.children} {/* without props, it renders an empty div */}
                </div>
                <Footer />
            </div>
        </ChakraProvider>
    )
}

export default Layout