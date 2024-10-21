import Menu from "../Menu";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <img src="logo2.jpeg" alt="Logo WEBGeocarto" />
            <Menu />
        </header>
    )
}