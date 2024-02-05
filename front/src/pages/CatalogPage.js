import GoodCard from '../components/GoodCard/GoodCard'
import useServerGoods from '../hooks/useServerGoods'

export default function CatalogPage() {
    const [goods, loading, loadMore] = useServerGoods('http://127.0.0.1:8000/api/catalog/')

    return (
        <div style={{'margin': '10px'}}>
            {goods?.map((good, i) => (
                <GoodCard key={good.id} good_name={good.name} good_date={good.date_created} good_price={good.price_roubles} good_photo={good.image_url}></GoodCard>
            ))}
            {loading && <p>Загрузка...</p>}
            {!loading && (
                <button onClick={loadMore} disabled={loading}>
                Load More
                </button>
            )}
        </div>
    )
}