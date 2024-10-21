import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import linksMenu from "../../utils/linksMenu";

export default function Menu() {

    return (
        <nav>
            {linksMenu.map((linkMenu) => <NavLink 
                key={linkMenu.link}
                className={({isActive}) => {
                    return isActive ? styles.linkActivated : styles.link
                }}
                to={linkMenu.link}>
                    {linkMenu.nome}
                </NavLink>            
            )}
        </nav>
    )
}