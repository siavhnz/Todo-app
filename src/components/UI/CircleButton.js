import styles from "./CircleButton.module.css";
import CheckIcon from "../../assets/images/icon-check.svg";
import { modes } from "../../utility/data";
/**
 * A checkbox component for completing a todo
 * @param {*} props mode, onPress(optional)
 */
const CircleButton = (props) => {
    const cssClass = (props.mode === modes.Completed) ? `${styles.btn} ${styles.checked}` : styles.btn;
    const presentational = (props.onPress) ? "active" : "disable";
    const handleOnPress = () => {
        /**
         * For presentational component onPress 
         * doesn't pass to component and if we 
         * don't check that we get an error on those 
         * kind of component use.
         * I use presentational in Input component
         * I could use a div with a checkbox style but
         * I rather use this component without functionality
         * whenever needed.
         */
        if(props.onPress) {
            props.onPress();
        }
    }
    
    return <button className={`${cssClass} ${styles[presentational]}`} onClick={handleOnPress}>
            {
                (props.mode === modes.Completed) ? <img src={CheckIcon} /> : ""
            }
        </button>;
}

export default CircleButton;