import GoodCard from '../components/GoodCard/GoodCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CatalogPage() {
    const [goods, setGoods] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/catalog/').then((response) => {
            setGoods(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <div style={{'margin': '10px'}}>
            {goods?.map((good, i) => (
                <GoodCard key={good.id} good_name={good.name} good_date={good.date_created} good_price={good.price_roubles} good_photo={good.image_url}></GoodCard>
            ))}
        </div>
    )
}