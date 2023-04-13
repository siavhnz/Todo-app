import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
    const cl = props.cssClass ? props.cssClass : "";
    return (
        <div className={`${styles.wrapper} ${cl}`}>
            {props.children}
        </div>
    );
}

export default Wrapper;