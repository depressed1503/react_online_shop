import Button from '../components/Button/Button'
import GoodCard from '../components/GoodCard/GoodCard'
import useServerGoods from '../hooks/useServerGoods'

export default function CatalogPage() {
    const [goods, loading, error, loadMore] = useServerGoods('http://127.0.0.1:8000/api/catalog/')
    return (
        <>
            <div style={{'display': 'flex', 'flex-direction': 'column', 'alignItems': 'center'}}>
                <div style={{'margin': '10px auto', 'display': 'flex', 'flex-direction': 'row', 'gap': '15px', 'flex-wrap':'wrap', 'justifyItems': 'center', 'alignItems': 'center'}}>
                        {goods?.map((good, i) => (
                            <GoodCard key={good.id} good_name={good.name} good_date={good.date_created} good_price={good.price_roubles} good_photo={good.image_url}></GoodCard>
                        ))}
                </div>
                {loading && <p>Загрузка...</p>}
                {error && <p style={{ color: 'red' }}>Ошибка при загрузке...</p>}
                {!loading && (
                    <Button onClick={loadMore} text={'Загрузить больше'} style={{'font-size': '14px'}}>
                    Load More
                    </Button>
                )}

            </div>

        </>
    )
}