import { useContext, useState } from "react";
import { TodoContext } from "../../store/context/todo-context";
import styles from "./Input.module.css";


/**
 * Input component for getting user todos
 */

const Input = (props) => {
    let [value, setValue] = useState("");
    const todoCtx = useContext(TodoContext)

    /**
     * Get user todo by pressing Enter(keyCode=13)
     * Clear the Input after add a todo
     */
    const keyDownHandler = (e) => {   
        if(value.trim() !== "" &&
            e.keyCode === 13) {
                todoCtx.addItem(value.trim());
                setValue("");
        }
    }

    // Track UserInput data
    const changeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles["input-container"]}>    
            <div className={styles.checkbox}></div>
            <input className={styles.input} type="text" placeholder="Create a new todo..." onChange={changeHandler} onKeyDown={keyDownHandler} value={value} />
        </div>
    );
}

export default Input;