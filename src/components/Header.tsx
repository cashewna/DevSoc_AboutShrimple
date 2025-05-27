import Dango from "../../public/dango.svg";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <img src={Dango} alt="Dango" width="64rem"/>
            <h1 className={style.h1}>Opposites Attract</h1>
        </header>
    )
};

export { Header };