import Todo from "../Todo";
import Wrapper from "./Wrapper";
import styles from "./Main.module.css";

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