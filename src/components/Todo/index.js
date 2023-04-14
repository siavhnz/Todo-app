import Input from "./Input";
import List from "./List";
import Actions from "./actions";

import { useReducer } from "react";
import { initialState , todoReducer } from "../../utility/todoReducer";
import { modes } from "../../utility/data";
/**
 * Todo Component consist of 3 component:
 * 1.Input component for getting todos
 * 2.List of todos
 * 3.Actions for fiters todos
 */
const Todo = () => {

    /**
     * Magange state and handle user interaction (add, remove item)
     * by todoReducer
     */
    const [state, dispatch] = useReducer(todoReducer, initialState);

    // Call dispatch for adding a new item
    const addItem = (title) => {
        dispatch(
            {
                type: "ADD",
                payload: {title, mode: modes.Active},
            });
    }

    // Call dispatch for removing an item
    const removeItem = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        });
    }

    // Call dispatch for clear all completed items
    const clearCompleted = () => {
        dispatch({
            type: "CLEAR_COMPLETED"
        })
    }

    // Call dispatch for mark a todo as completed
    const markAsCompleted = (id) => {
        dispatch({
            type: "MARK_AS_COMPLETED",
            payload: id
        })
    }

    // Call dispatch for filter todos based on modes(all, active, completed)
    const filter = (mode) => {
        dispatch({
            type: "FILTER",
            payload: mode
        })
    }

    return (
        <>
            <Input onAddItem={addItem}/>
            <List mode={state.mode}
            items={state.todoList} 
            onRemoveItem={removeItem}
            onClearCompleted={clearCompleted}
            onMarkAsCompleted={markAsCompleted} />

            <Actions onFilter={filter} mode={state.mode}/>
        </>
    );
}

export default Todo;