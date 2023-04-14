import styles from "./Wrapper.module.css";
/**
 * Wrap a component to padding from edges
 * @param {*} props cssClass(optional)
 */
const Wrapper = (props) => {
    const cl = props.cssClass ? props.cssClass : "";
    return (
        <div className={`${styles.wrapper} ${cl}`}>
            {props.children}
        </div>
    );
}

export default Wrapper;