import { useContext } from "react";
import { TodoContext } from "../../store/context/todo-context";
import { modes } from "../../utility/todo-data";
import Checkbox from "../UI/Checkbox";
import CrossIcon from "../../assets/images/icon-cross.svg";
import styles from "./Item.module.css";

const Item = ({id, title, mode }) => {

    const todoCtx = useContext(TodoContext);

    return (
        <li className={styles.item}>
            <Checkbox mode={mode} onPress={() => todoCtx.markAsCompleted(id)} />
            <h2 onClick={() => todoCtx.markAsCompleted(id)} className={(mode === modes.Completed) ? `${styles.title} ${styles.completed}` : styles.title}>
                {title}
            </h2>
            <button className={styles.cross} onClick={() => todoCtx.removeItem(id)}>
                <img src={CrossIcon} alt="delete a todo item" />
            </button>
        </li>
    );
}

export default Item;