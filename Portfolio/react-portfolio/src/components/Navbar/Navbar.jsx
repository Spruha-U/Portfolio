import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
              Portfolio
            </a>
            <div className={styles.menu}>
                <ul className={styles}>
                    <li>
                        <a className={styles.menuItems} 
                        href="#about">About</a>
                    </li>
                    <li>
                        <a className={styles.menuItems}
                        href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className={styles.menuItems}
                        href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className={styles.menuItems}
                        href="#contact">Contact</a>
                    </li>
                </ul>
            </div>       
        </nav>
    );
};