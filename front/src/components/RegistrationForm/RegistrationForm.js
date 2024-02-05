import '../Forms.css'
import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegistrationForm() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const sendRegistrationRequest = async () => {
        const userData = {
            'email': login,
            'password': password,
        }
        axios.post('http://127.0.0.1:8000/api/registration/', userData).then((response) => {
            console.log(response.status)
            if(response.status == 201) {
                navigate('/')
            }
        })
    }

    return (
        <div className='frm'>
            <Input onChange={setLogin} placeholder={'Логин'}></Input>
            <Input onChange={setPassword} placeholder={'Пароль'}></Input>
            <Button text={'Зарегистрироваться'} onClick={sendRegistrationRequest}></Button>
        </div>
    )
}