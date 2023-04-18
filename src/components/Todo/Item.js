import { useContext } from "react";
import { TodoContext } from "../../store/context/todo-context";
import { modes } from "../../utility/todo-data";
import { motion, Reorder } from "framer-motion";
import Checkbox from "../UI/Checkbox";
import CrossIcon from "../../assets/images/icon-cross.svg";
import styles from "./Item.module.css";

const Item = ({id, title, mode, value }) => {

    const todoCtx = useContext(TodoContext);

    return (
        <Reorder.Item className={styles.item} value={value}>
            <Checkbox mode={mode} onPress={() => todoCtx.markAsCompleted(id)} />
            <h2 className={(mode === modes.Completed) ? `${styles.title} ${styles.completed}` : styles.title}>
                {title}
            </h2>
            <motion.button whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className={styles.cross} 
                onClick={() => todoCtx.removeItem(id)}>
                <img src={CrossIcon} alt="delete a todo item" />
            </motion.button>
        </Reorder.Item>
    );
}

export default Item;