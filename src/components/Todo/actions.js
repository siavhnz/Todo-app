import { useContext } from "react";
import { TodoContext } from "../../store/context/todo-context";
import { modes } from "../../utility/todo-data";
import styles from "./Actions.module.css";

/**
 * Actions component for getting user filters
 */
const Actions = () => {

    const todoCtx = useContext(TodoContext);

    return (
        <div className={styles["actions-container"]}>
            <div className={styles.count}>
                {todoCtx.activeItemsCount} items left
            </div>
            <div className={styles["modes-container"]}>
                <button className={(todoCtx.mode === modes.All) ? styles["active-text"]: ""} onClick={() => todoCtx.filter(modes.All)}>All</button>
                <button className={(todoCtx.mode === modes.Active) ? styles["active-text"]: ""} onClick={() => todoCtx.filter(modes.Active)}>Active</button>
                <button className={(todoCtx.mode === modes.Completed) ? styles["active-text"]: ""} onClick={() => todoCtx.filter(modes.Completed)}>Completed</button>
            </div>
            <button onClick={() => todoCtx.clearCompleted()} className={styles.clear}>
                Clear Completed
            </button>
            <div className={styles.empty} />       
        </div>   
    );
}

export default Actions;