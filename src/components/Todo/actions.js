import styles from "./actions.module.css";

const Actions = () => {
    return (
        <div className={styles["actions-container"]}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

export default Actions;