import { useContext } from "react";
import { TodoContext } from "../../store/context/todo-context";
import Item from "./Item";
import Actions from "./Actions";

/**
 * List of todos component
 */

const List = () => {

    const todoCtx = useContext(TodoContext);

    // Get Todos from context
    let items = todoCtx.filteredList;

    // Create Todo list
    const list = <ul>
        {
            items.map((item, index) => {
                return (
                    <Item key={index}
                    id={item.id}
                    title={item.title}
                    mode={item.mode}/>
                ); 
            })
        }
    </ul>;
        

    return(
        <div>
            {list}
            <Actions />
        </div>
    );
}

export default List;