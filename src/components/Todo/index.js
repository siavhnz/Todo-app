import Input from "./Input";
import List from "./List";
import TodoContextProvider from "../../store/context/todo-context";
/**
 * Todo Component consist of 2 component:
 * 1.Input component for getting todos
 * 2.List of todos with its actions
 */
const Todo = () => {

    return (
        <TodoContextProvider>
            <Input />
            <List />
        </TodoContextProvider>
    );
}

export default Todo;