import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
    const location = useLocation();

    const ativar = (url) => {
        if (url === location.pathname) {
            return "btn btn-primary";
        }

        return "btn btn-outline-primary";
    }

    return (
        <nav>
            <Link to="/" className={ativar('/')}>Início</Link>
            <Link to="/listar" className={ativar('/listar')}>Listar</Link>
            <Link to="/novo" className={ativar('/novo')}>Novo</Link>
            <Link to="/login" className={ativar('/login')}>Sair</Link>
        </nav>
    )
}