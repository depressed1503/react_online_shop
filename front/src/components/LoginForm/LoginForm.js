import '../Forms.css'
import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginForm() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const sendLoginRequest = () => {
        axios.post('http://127.0.0.1:8000/api/login/', {
            'username': login,
            'password': password,
        }).then((response) => {
            if(response.status === 200) {
                navigate('/')
            }
        })
    }

    return (
        <div className='frm'>
            <Input onChange={setLogin} placeholder={'Логин'}></Input>
            <Input onChange={setPassword} placeholder={'Пароль'}></Input>
            <Button text={'Зарегистрироваться'} onClick={sendLoginRequest}></Button>
        </div>
    )
}