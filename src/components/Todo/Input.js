import CircleButton from "../UI/CircleButton";
import FilledCircleButton from "../UI/FilledCircleButton";

const Input = () => {
    return (
        <div>
            <CircleButton />
            <input type="text" placeholder="Create a new todo" />
        </div>
    );
}

export default Input;