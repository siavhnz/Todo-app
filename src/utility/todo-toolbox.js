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
    } 
    else if(mode  === modes.Completed) {
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

/**
 * reorder the todos based on order of filteredList
 */
export const reorderList = (list, filteredList) => {
    let items = [...list];
    let filteredItems = [...filteredList]

    // if size of 2 array are the same just copy the filtered array into list
    if(list.length === filteredItems.length) {
        items = [...filteredItems];
    } 
    // otherwise reorder all items
    else {

        /**
         *  main array ->     [ 1 , 2 , 3 , 4 , 5 , 6 , 7]
         *  reordered filtered array -> [ 5 , 1 , 6 , 2 ]
         *  solution for merge reordered filtered array to main array with correct order:
         *  1. create a new array with values of main array
         *  [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ]
         *  
         *  2. copy reordered filtered array items respectively into main array where numbers have changed
         *  
         *  [ 5 , 1 ,         6 , 2     ] 
         *  [ - , - , 3 , 4 , - , - , 7 ]
         * 
         *  [ 5 , 1 , 3 , 4 , 6 , 2 , 7 ]
         *  
         *  so for each item in main array if exist an item in reordered filtered array
         *  copy each item of reordered filtered array (in order. let j = 0 , 1 , etc) into 
         *  the current position of main array (let i)
         */ 

        let j = 0;
        for(let i = 0; i < items.length; i++) {
            if(filteredItems.find(x => x.id === items[i].id)) {
                items[i] = filteredItems[j];
                j++;
            }
        }
    }
    return items;
}
