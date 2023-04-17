import { modes } from "../../utility/todo-data";
import { calculateItemsCount, filterList, changeMode } from "../../utility/todo-toolbox";

/**
 * This initial state consist of:
 * 1. list of todos
 * 2. a uniqe id for track each todo
 * 3. mode of each todo
 * 4. active items
 */
export const todoDefaultState = {
    list: [],
    filteredList: [],
    uid: 0,
    mode: "", //all, active, completed
    activeItemsCount: 0,
};

export const todoReducer = (state, action) => {

    /**
     * I used newState to first calculate the active items
     * and filter items then return the state instead of 
     * return state on each condition
     */
    let newState = {...todoDefaultState};

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
        newState = {
            ...state,
            list: [
                {   
                    id: state.uid + 1,
                    ...action.payload,
                },
                ...state.list
            ],
            uid: state.uid + 1,
            mode: modes.All,
        }
    }

    /**
     * Remove a todo item based on payload (id)
     */
    else if(action.type === "REMOVE") {

        newState = {
            ...state,
            list: state.list.filter((item) => {
                return item.id !== action.payload
            }),
            
        }
    }

    /**
     * Change todo item mode to completed based on 
     * payload (id)
     */
    else if(action.type === "MARK_AS_COMPLETED"){
        newState = {
            ...state,
            list: state.list.map((item) => {
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
        newState = {
            ...state,
            list: state.list.filter((item) => {
                return item.mode !== modes.Completed
            }),
        }
    }

    /**
     * Change list mode based on payload (user action).
     * payload (all, active, completed)
     */
    else if(action.type === "FILTER") {
        newState = {
            ...state,
            mode: action.payload
        }
    }

    // if we are in completed or active mode and we have no items
    // after REMOVE action back to all mode otherwise stay as before
    let mode = changeMode(newState.list, newState.mode, action.type);

    return {
        ...newState,
        mode: mode,
        activeItemsCount: calculateItemsCount(newState.list, modes.Active),
        filteredList: filterList(newState.list, mode),
    };
}

