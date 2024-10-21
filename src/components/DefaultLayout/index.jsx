import { Outlet, useLocation } from "react-router-dom";
import styles from "./DefaultLayout.module.css";
import linksMenu from "../../utils/linksMenu";

export default function DefaultLayout({ children }) {

    const location = useLocation();
    const linkMenu = linksMenu.find((linkMenu) => location.pathname === linkMenu.link);

    return (
        <main className={styles["pagina-padrao"]}>
            <section className={styles.titulo__pagina}>
                <h1>{linkMenu.nome.toUpperCase()}</h1>
            </section>
            <section className={styles.content}>
                <Outlet />
                {children}
            </section>
        </main>
    )
}