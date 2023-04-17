import styles from "./Checkbox.module.css";
import CheckIcon from "../../assets/images/icon-check.svg";
import { modes } from "../../utility/todo-data";
/**
 * A checkbox component for completing a todo
 * @param {*} props mode, onPress(optional)
 */
const Checkbox = ({mode, onPress}) => {
    const cssClass = (mode === modes.Completed) ? `${styles.btn} ${styles.checked}` : styles.btn;
    
    return <button className={cssClass} onClick={() => onPress()}>
            {
                (mode === modes.Completed) ? <img src={CheckIcon} alt="checkbox for mark a todo as completed" /> : ""
            }
        </button>;
}

export default Checkbox;