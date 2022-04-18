import './index.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <div className="logo">

            </div>
            <div className="menu">
                <a><Link to="/">ENTRAR</Link></a>
                <a><Link to="/cadastrar">CADASTRAR</Link></a>
            </div>
        </header>
    )
}