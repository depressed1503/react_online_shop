import { useState, useEffect } from 'react';
import axios from 'axios';

const useServerGoods = (apiEndpoint, pageSize = 10) => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        setLoading(true);
        setError(null);

        // Загрузка данных с сервера по указанному эндпоинту и странице
        const response = await axios.get(apiEndpoint, {
          params: { page, pageSize },
        });
        
        const data = response.data.results;

        // Обновление состояния товаров, добавляя новые товары к массиву
        setGoods((prevGoods) => [...prevGoods, ...data]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching goods:', error);
        setError('Error fetching goods. Please try again later.');
        setLoading(false);
      }
    };

    fetchGoods();
  }, [apiEndpoint, pageSize, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return [goods, loading, error, loadMore];
};

export default useServerGoods;
