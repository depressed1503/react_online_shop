import { useState, useEffect } from 'react'
import axios from 'axios'

const useServerGoods = (apiEndpoint, pageSize = 10) => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        setLoading(true)

        // Загрузка данных с сервера по указанному эндпоинту и странице
        const response = await axios.get(apiEndpoint, {
          params: { page, pageSize },
        });
        
        const data = response.data

        // Обновление состояния товаров
        setGoods((prevGoods) => [...prevGoods, ...data])

        setLoading(false)
      } catch (error) {
        console.error('Error fetching goods:', error)
        setLoading(false)
      }
    }

    fetchGoods()
  }, [apiEndpoint, pageSize, page])

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  };

  return [goods, loading, loadMore]
}

export default useServerGoods
