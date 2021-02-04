import React, {useContext} from 'react';
import {AuthContext} from "../context";
import Button from '../UIComponent/Button';
import Input from '../UIComponent/Input';

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input id='username' type="text" placeholder="Введите логин"/>
                <Input id='password' type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
