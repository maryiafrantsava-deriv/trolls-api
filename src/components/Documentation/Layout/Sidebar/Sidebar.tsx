import { useRouter } from 'next/router';
import Link from "next/dist/client/link";
import routes from "./routes";
import styles from "./Sidebar.module.scss";


const Sidebar: React.FC<{ is_mobile: boolean}> = ({ is_mobile }) => {
    const router = useRouter();

    return (
        is_mobile ? (
            <select id="mobile-page-selector" className={styles['mobile-page-selector']}>
                {routes.map(route => <option value={route.href} key={route.name}>{route.name}</option>)}
            </select>
        ) : (
            <div id="sidebar" className={styles['sidebar-left']}>
                <p className={`${styles['sidebar-title']} bold`}>Deriv API</p>
                {routes.map(route => (
                    <Link href={route.href} key={route.name}>
                        <a id={route.id} className={`${router.pathname === route.href ? styles.selected : ''}`}>{route.name}</a>
                    </Link>
                ))}
            </div>
        )
    )
}

export default Sidebar;
