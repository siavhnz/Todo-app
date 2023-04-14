import Wrapper from "./Wrapper";
import ImgControlLight from "../../assets/images/icon-moon.svg";
import ImgControlDark from "../../assets/images/icon-sun.svg";
import styles from "./Header.module.css";

/**
 * Header component to hold logo and theme mode
 */

const Header = () => {
    return (
        <>
            <div className={styles["body-img"]} />
            <Wrapper>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        TODO
                    </h1>
                    <button className={styles["toggle-btn"]}>
                        <img src={ImgControlLight} alt="toggle dark and light mode" />
                    </button>
                </header>
            </Wrapper>
            
        </>
    );
}

export default Header;