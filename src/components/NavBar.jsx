import { NavLink } from "react-router-dom";

const linkPage = [
    { route: '/', label: 'HomePage' },
    { route: '/Chi siamo', label: 'Chi siamo' },
    { route: '/Prodotti', label: 'Prodotti' }
]
const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                {linkPage.map(link => (
                    <li>
                        <NavLink to={link.route}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default NavBar;