import { createContext, useReducer } from "react";
import { todoDefaultState, todoReducer } from "../reducer/todo-reducer";
import { data, modes } from "../../utility/todo-data";
import { calculateItemsCount, filterList } from "../../utility/todo-toolbox";


export const TodoContext = createContext({
    list: [],
    filteredList: [],
    uid: 0,
    mode: "", //all, active, completed
    activeItemsCount: 0,
    addItem: (title) => {},
    removeItem: (id) => {},
    clearCompleted: () => {},
    markAsCompleted: (id) => {},
    filter: (mode) => {},
    reorderList: () => {},
});


const TodoContextProvider = (props) => {

    /**
     * Magange state and handle user interaction (add, remove item)
     * by todoReducer
     * Important ->
     * I used init to initialize the state because I wanted to set
     * activeItemsCount for the first load 
     */
    const [state, dispatch] = useReducer(todoReducer, todoDefaultState, () => {
        
        return {
            list: data,
            filteredList: filterList(data, modes.All),
            uid: 6,
            mode: modes.All,
            activeItemsCount: calculateItemsCount(data, modes.Active),
        }
    });

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

    // Call dispatch for reorder the todos with framer-motion
    const reorderList = (items) => {
        dispatch({
            type: "REORDER_LIST",
            payload: items
        });
    }

    const value = {
            list: state.list,
            filteredList: state.filteredList,
            uid: state.uid,
            mode: state.mode,
            activeItemsCount: state.activeItemsCount,
            addItem: addItem,
            removeItem: removeItem,
            clearCompleted: clearCompleted,
            markAsCompleted: markAsCompleted,
            filter: filter,
            reorderList: reorderList
        };
    
    return <TodoContext.Provider value={value}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContextProvider;