import { modes } from "./todo-data";

/**
 * Count todos based on modes
 * @param {*} items array of todos
 * @param {*} mode string 'all', 'acitve', and 'completed'
 * use modes.Active etc
 */
export const calculateItemsCount = (items, mode) => {

    let count = 0; 

    if(mode === modes.Active) {
        items.forEach(item => {
            if(item.mode === modes.Active) {
                count += 1;
            }
        });
    } else if (mode === modes.Completed){
        items.forEach(item => {
            if(item.mode === modes.Completed) {
                count += 1;
            }
        });
    } else { // modes.All
        count = items.length
    }
    
    return count;
}

/**
 * Return List of todos based on user filter
 * @param {*} items array of todos
 * @param {*} mode string state.mode
 */
export const filterList = (items, mode) => {
    //Default mode is all = [...items]
    let list = [...items];

    if(mode === modes.Active) {
        list = items.filter((item) => {
            return item.mode === modes.Active
        })
    } else if(mode  === modes.Completed) {
        list = items.filter((item) => {
            return item.mode === modes.Completed
        })
    }

    return list;
}

/**
 * if (mode is in completed and action.type is in REMOVE or CLEAR_COMPLETED) or 
 * (mode is in active and action.type is in REMOVE or MARK_AS_COMPLETED )and 
 * we have no items back to all mode
 * @param {*} items array of todos
 * @param {*} mode string state.mode
 * @param {*} actionType action.type
 */
export const changeMode = (items, mode, actionType) => {
    let newMode = mode;
    
    if(
            (
                (mode === modes.Completed &&
                calculateItemsCount(items, modes.Completed) === 0) &&
                (actionType === "REMOVE" || actionType === "CLEAR_COMPLETED")
            ) 
            ||
            ( 
                (mode === modes.Active &&
                calculateItemsCount(items, modes.Active) === 0) &&
                (actionType === "REMOVE" || actionType === "MARK_AS_COMPLETED")
            )
        ) {
        
        newMode = modes.All;
    } 

    return newMode;
}