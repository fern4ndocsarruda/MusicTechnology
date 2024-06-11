import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className={styles.header}>

            <Link to="/">
                <span>Music Technology</span>
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/contatos">Contato</Link>

            </nav>
        </header>
    );
}

export default Header;