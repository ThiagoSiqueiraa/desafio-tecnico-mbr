import React, { useContext } from 'react';
import './Header.css'
import UserContext from './context/UserContext/UserContext';

function Header() {
    const user  = useContext(UserContext)

    return (
        <header className="header">
            <div className="header__avatar">
            </div>
            <div className="header__username">
                <h1>{user.name}</h1>
            </div>

        </header>
    )
}

export default Header;