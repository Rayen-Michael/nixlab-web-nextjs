import Link from "next/link";
import { HiX } from 'react-icons/hi';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import usePath from "../../hooks/usePath";
import styles from '../../styles/navbar.module.scss';

const menuItems = ['home', 'services', 'projects', 'about', 'contact'];

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [scolled, setScolled] = useState(false);

    const path = usePath();

    useEffect(() => {

        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) { setScolled(true) } else { setScolled(false) }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    return (
        <nav className={
            scolled ?
                `${styles.app__navbar} ${styles.scrolled}` :
                styles.app__navbar
        }>

            <div className={styles.app__navbar_logo}>
                <Link href='/' >
                    <img src='/logo.png'
                        alt='logo'
                    />
                </Link>
            </div>

            {
                !toggle &&
                <>
                    <ul className={styles.app__navbar_menu}>

                        {
                            menuItems.map((item) => (
                                <li key={`link-${item}`}
                                    className={
                                        path == `#${item}` ?
                                            `app__flex ${styles.active}` :
                                            'app__flex'
                                    }>
                                    <div />
                                    <Link href={`/${item}`}>{item}</Link>
                                </li>
                            ))
                        }

                    </ul>

                    <div className={styles.app__navbar_login}>

                        <Link href='/login' >
                            <div className={`app__outlined_btn ${styles.navbar__login_btn}`}>Login</div>
                        </Link>

                    </div>
                </>
            }

            {/* Mobile Menu Toggle */}

            <div className={styles.app__navbar_toggle}>
                <div className={styles.app__navbar_toggle_btn}>
                    <RiMenu3Fill onClick={() => setToggle(true)} />
                </div>
            </div>


            <div className={styles.app__navbar_mobile_menu} >

                <div className={
                    toggle ?
                        `${styles.app__navbar_menu_items} ${styles.show}` :
                        `${styles.app__navbar_menu_items}`
                }>
                    <div onClick={() => setToggle(false)}
                        className={styles.app__navbar_mobile_menu_close}>
                        <HiX />
                    </div>
                    <ul>
                        {
                            menuItems.map((item) => (
                                <li key={item}
                                    className={
                                        path == `#${item}` ? `${styles.active}` : ''
                                    }
                                    onClick={() => setToggle(false)}
                                >
                                    <Link href={`/${item}`} >
                                        {item}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <Link href='/login' >
                        <div className={`app__outlined_btn ${styles.navbar__login_btn}`}>Login</div>
                    </Link>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;