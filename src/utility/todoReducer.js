import { modes } from "./data";

/**
 * This initial state consist of:
 * 1. list of todos
 * 2. a uniqe id for track each todo
 * 3. mode of each todo
 */
export const initialState = {
    todoList: [],
    uid: 0,
    mode: "all", // active, completed
};

export const todoReducer = (state, action) => {
    /**
     * Add a new todo and increment the uid
     * Important ->
     * Use ...state first to spread the state properties
     * then change whatever property that we want.
     * If we change properties first then
     * spread the state (...state), changed properties
     * are overwritten
     */
    if(action.type === "ADD") {
        return {
            ...state,
            todoList: [
                {   
                    id: state.uid + 1,
                    ...action.payload,
                },
                ...state.todoList
            ],
            uid: state.uid + 1
        }
    }

    /**
     * Remove a todo item based on payload (id)
     */
    else if(action.type === "REMOVE") {
        return {
            ...state,
            todoList: state.todoList.filter((item) => {
                return item.id !== action.payload
            }),
        }
    }

    /**
     * Change todo item mode to completed based on 
     * payload (id)
     */
    else if(action.type === "MARK_AS_COMPLETED"){
        return {
            ...state,
            todoList: state.todoList.map((item) => {
                if(item.id === action.payload) {
                    item.mode = modes.Completed
                }
                return item;
            }),
        }
    }

    /**
     * Delete all completed items
     */
    else if(action.type === "CLEAR_COMPLETED") {
        return {
            ...state,
            todoList: state.todoList.filter((item) => {
                return item.mode !== modes.Completed
            }),
        }
    }

    /**
     * Change list mode based on payload (user action).
     * payload (all, active, completed)
     */
    else if(action.type === "FILTER") {
        return {
            ...state,
            mode: action.payload
        }
    }

    return state;
}
