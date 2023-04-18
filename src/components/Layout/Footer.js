import Wrapper from "./Wrapper";
import styles from "./Footer.module.css";

/**
 * Footer component
 */
const Footer = () => {
    return (
        <footer cssClass={styles.footer}>
            <Wrapper>
                Drag and drop to reorder list
            </Wrapper>
        </footer>

    );
}

export default Footer;