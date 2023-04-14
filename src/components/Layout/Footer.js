import Wrapper from "./Wrapper";
import styles from "./Footer.module.css";

/**
 * Footer component
 */
const Footer = () => {
    return (
        <Wrapper cssClass={styles.footer}>
            Drag and drop to reorder list
        </Wrapper>
    );
}

export default Footer;