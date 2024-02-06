import './Headliner.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export default function Headliner() {
    const navigate = useNavigate()
    return (
        <div className='headliner__wrapper'>
            <div className='headliner'>
                <h2>Лучшие канцтовары индустрии</h2>
                <p>
                    Премиальное качество, разнообразие брендов и привлекательный ценник нашего магазина не оставят равнодушным ни единого покупателя.
                    Мы тщательно отбираем только те товары, которые соответствуют высоким стандартам, 
                    чтобы обеспечить вас надежными и стильными инструментами для творчества. 
                </p>
                <Button text={'В каталог'} onClick={() => {navigate('catalog/')}}/><br></br>
                <a href='registration/'>Регистрация</a><br></br>
                <a href='login/'>Вход</a>
            </div>

        </div>
        
    )
}