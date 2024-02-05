import './GoodCard.css'
import Button from '../Button/Button'
export default function GoodCard({good_name, good_date, good_price, good_photo}) {
    return (
        <div className='good_card'>
            <img src={good_photo} alt={good_name}></img>
            <div className='good_card__info'>
                <div className='good_card__info__price'>{good_price}₽</div>
                {good_name}
                <span className='good_card__info__date'>{good_date}</span>
                <Button text={'В корзину'} style={{'margin-top': 'auto'}}></Button>
            </div>
        </div>
    )
}
