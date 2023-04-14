import CircleButton from "../UI/CircleButton";
import CrossIcon from "../../assets/images/icon-cross.svg";
import styles from "./List.module.css";
import { modes } from "../../utility/data";

/**
 * List of todos component
 * @param {*} props items, mode, onRemoveItem, onClearCompleted, onMarkAsCompleted
 */

const List = (props) => {

    // Call parent (index.js) removeItem to remove a todo
    const handleRemove = (id) => {
        props.onRemoveItem(id);
    }

    // Call parent (index.js) clearCompleted to remove all completed todos
    const handleClearCompleted = () => {
        props.onClearCompleted();
    }

    // Call parent (index.js) markAsCompleted to mark a todo as a completed
    const markAsCompleted = (id) => {
        props.onMarkAsCompleted(id);
    }

    // Get Todos from props
    let items = props.items;

    // Count active todos
    let activeCount = 0;
    items.forEach(item => {
        if(item.mode === modes.Active) {
            activeCount += 1;
        }
    });

    /**
     * Filter todos base on mode (all, active or completed)
     * Modes selects by user (all mode is default)
     */ 
    if(props.mode === modes.Active) {
        items = items.filter((item) => {
            return item.mode === modes.Active
        })
    } else if(props.mode === modes.Completed) {
        items = items.filter((item) => {
            return item.mode === modes.Completed
        })
    }

    // Create Todo list
    const list = items.map((item, index) => {
        return (
            <li className={styles.item} key={index}>
                <CircleButton mode={item.mode} onPress={() => markAsCompleted(item.id)} />
                <h2 className={(item.mode === modes.Completed) ? `${styles.title} ${styles.completed}` : styles.title}>
                    {item.title}
                </h2>
                <button className={styles.cross} onClick={() => handleRemove(item.id)}>
                    <img src={CrossIcon} />
                </button>
            </li>
        ); 
    });

    return(
        <div className={styles["list-container"]}>
            <ul>
                 {list}
            </ul>
            <div className={styles.info}>
                <div>
                    {activeCount} items left
                </div>
                <button onClick={() => handleClearCompleted()}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

export default List;