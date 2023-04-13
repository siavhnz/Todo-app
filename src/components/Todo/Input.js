import Wrapper from "../Layout/Wrapper";
import CircleButton from "../UI/CircleButton";
import FilledCircleButton from "../UI/FilledCircleButton";

import styles from "./Input.module.css";

const Input = () => {
    return (
        <div className={styles["input-container"]}>
            <CircleButton />
            <input type="text" placeholder="Create a new todo" />
        </div>
    );
}

export default Input;