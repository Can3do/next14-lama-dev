import styles from './styles.module.css'

const BurgerMenu = ({onClick, isMenuOpen}) => {
    return (
        <button className={`${styles.button} lg:hidden z-40`} aria-controls="primary-navigation" aria-expanded={isMenuOpen} onClick={onClick}>
            <svg stroke="var(--button-color)" fill="none" className={`${styles.hamburger} lg:hidden -z-1`} viewBox="-10 -10 120 120" width="50">
                <path className={styles.line} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"></path>
            </svg>
        </button>
    )
}

export default BurgerMenu