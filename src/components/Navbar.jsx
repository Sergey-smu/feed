import React, {useContext} from 'react';
import {AuthContext} from "../context";
import Button from '../UIComponent/Button';

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <Button onClick={logout}>
                Выйти
            </Button>
           
            <div className="navbar__links">
                <Button href="/about">О сайте</Button>
                <Button href="/posts">Посты</Button>
            </div>
        </div>
    );
};

export default Navbar;
