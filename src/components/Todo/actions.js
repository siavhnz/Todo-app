import { modes } from "../../utility/data";
import styles from "./actions.module.css";

/**
 * Actions component for getting user filters
 * @param {*} props mode, onFilter
 */
const Actions = (props) => {

    const handleFilter = (mode) => {
        props.onFilter(mode);
    }

    return (
        <div className={styles["actions-container"]}>
            <button className={(props.mode === modes.All) ? styles["active-text"]: ""} onClick={() => handleFilter(modes.All)}>All</button>
            <button className={(props.mode === modes.Active) ? styles["active-text"]: ""} onClick={() => handleFilter(modes.Active)}>Active</button>
            <button className={(props.mode === modes.Completed) ? styles["active-text"]: ""} onClick={() => handleFilter(modes.Completed)}>Completed</button>
        </div>
    );
}

export default Actions;