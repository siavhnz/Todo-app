import Wrapper from "./Wrapper";
import ImgControlLight from "../../assets/images/icon-moon.svg";
import ImgControlDark from "../../assets/images/icon-sun.svg";
import styles from "./Header.module.css";

/**
 * Header component to hold logo and theme mode
 * @param {*} props onThemeChange, theme
 */

const Header = (props) => {

    const handleTheme = () => {
        props.onThemeChange();
    }
    
    return (
        <>
            <div className={styles["body-img"]} />
            <Wrapper>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        TODO
                    </h1>
                    <button className={styles["toggle-btn"]} onClick={handleTheme}>
                        <img src={
                            (props.theme.light) ? ImgControlLight : ImgControlDark 
                        } alt="toggle dark and light mode" />
                    </button>
                </header>
            </Wrapper>
            
        </>
    );
}

export default Header;