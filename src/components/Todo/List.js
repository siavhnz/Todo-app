import CircleButton from "../UI/CircleButton";
import FilledCircleButton from "../UI/FilledCircleButton";
import CrossIcon from "../../assets/images/icon-cross.svg";


const List = () => {
    return(
        <>
            <ul>
                <li>
                    <CircleButton />
                    <h2>
                        item 1
                    </h2>
                    <button>
                        <img src={CrossIcon} />
                    </button>
                </li>
                <li>
                <FilledCircleButton />
                    <h2>
                        item 2
                    </h2>
                    <button>
                        <img src={CrossIcon} />
                    </button>
                </li>
            </ul>
            <div>
                <div>
                    5 items left
                </div>
                <button>
                    Clear Completed
                </button>
            </div>
        </>
    );
}

export default List;