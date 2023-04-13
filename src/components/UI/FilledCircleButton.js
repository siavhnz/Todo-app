import CheckIcon from "../../assets/images/icon-check.svg";
import styles from "./FilledCircleButton.module.css";

const CircleButton = () => {
    return <button className={styles.btn}>
        <img src={CheckIcon} />
    </button>
}

export default CircleButton;