import ImgControlLight from "../../assets/images/icon-moon.svg";
import ImgControlDark from "../../assets/images/icon-sun.svg";


const Header = () => {
    return (
        <header>
            <h1>
                TODO
            </h1>
            <button>
                <img src={ImgControlLight} alt="toggle dark and light mode" />
            </button>
        </header>
    );
}

export default Header;