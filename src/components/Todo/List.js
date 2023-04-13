import CircleButton from "../UI/CircleButton";
import FilledCircleButton from "../UI/FilledCircleButton";
import CrossIcon from "../../assets/images/icon-cross.svg";
import styles from "./List.module.css";

const List = (props) => {

    let count = 0;
    const items = props.items.map((item) => {
        if(item.state === "completed") {
            return (
                <li className={styles.item}>
                    <FilledCircleButton />
                    <h2 className={styles.title}>
                        {item.title}
                    </h2>
                    <button className={styles.cross}>
                        <img src={CrossIcon} />
                    </button>
                </li>
            );
        } else if (item.state === "active") {
            
            count += 1;
            
            return (
                <li className={styles.item}>
                    <CircleButton />
                    <h2 className={styles.title}>
                        {item.title}
                    </h2>
                    <button className={styles.cross}>
                        <img src={CrossIcon} />
                    </button>
                </li>
            );
        }
    });

    return(
        <div className={styles["list-container"]}>
            <ul>
                {items}
            </ul>
            <div className={styles.info}>
                <div>
                    {count} items left
                </div>
                <button>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

export default List;