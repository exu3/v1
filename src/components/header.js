import React from "react"
import { Link } from "gatsby"

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                👋
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="https://scrapbook.hackclub.com/ella/">Scrapbook</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header