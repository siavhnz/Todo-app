import Todo from "../Todo";
import Wrapper from "./Wrapper";
import styles from "./Main.module.css";

/**
 * Main container
 * This component hold Todo Component and add 
 * HTML semantic to the page (main HTML tag)
 */
const Main = () => {
    return (
        <main>
            <Wrapper cssClass={styles["main-container"]}>
                <Todo />
            </Wrapper>
        </main>
    );
}

export default Main;