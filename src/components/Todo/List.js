import { useContext } from "react";
import { TodoContext } from "../../store/context/todo-context";
import Item from "./Item";
import Actions from "./Actions";
import { Reorder } from "framer-motion";

/**
 * List of todos component
 */

const List = () => {

    const todoCtx = useContext(TodoContext);

    // Create Todo list
    const list = <Reorder.Group as="ul" axis="y" values={todoCtx.filteredList} onReorder={todoCtx.reorderList} >
        {
            todoCtx.filteredList.map((item) => {
                return (
                    <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    mode={item.mode}
                    value={item}/>
                ); 
            })
        }
    </Reorder.Group>;
        

    return(
        <div>
            {list}
            <Actions />
        </div>
    );
}

export default List;