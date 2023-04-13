import Input from "./Input";
import List from "./List";
import Actions from "./actions";

import { list } from "../../utility/data";

const Todo = () => {
    return (
        <>
            <Input />
            <List items={list} />
            <Actions />
        </>
    );
}

export default Todo;