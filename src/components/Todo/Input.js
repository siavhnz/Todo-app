import { useState } from "react";

import CircleButton from "../UI/CircleButton";
import styles from "./Input.module.css";

import {modes} from "../../utility/data"

/**
 * Input component for getting user todos
 * @param {*} props onAddItem
 */

const Input = (props) => {
    let [value, setValue] = useState(""); 

    /**
     * Get user todo by pressing Enter(keyCode=13)
     * Clear the Input after add a todo
     */
    const keyDownHandler = (e) => {   
        if(value.trim() !== "" &&
            e.keyCode === 13) {
                props.onAddItem(value.trim());
                setValue("");
        }
    }

    // Track UserInput data
    const changeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles["input-container"]}>    
            <CircleButton mode={modes.Active} />{/* this is a presentational component */}
            <input type="text" placeholder="Create a new todo" onChange={changeHandler} onKeyDown={keyDownHandler} value={value} />
        </div>
    );
}

export default Input;