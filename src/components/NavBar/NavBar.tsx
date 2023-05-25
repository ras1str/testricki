import styles from './NavBar.module.css'
import { Outlet, Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <>
            <header className={styles.navbar}>
                <Link to='/'>Main</Link>
            </header>

            <Outlet />
        </>
    )
}

export default Navbar