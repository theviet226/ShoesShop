import React, { useState, useEffect } from 'react';
import css from './search.module.scss';
import { axiosWithoutAuth } from 'src/services/config.service';
import { Card, TCard } from 'src/components/card'

interface SearchProps {
  closeModal: () => void;
  isOpen: boolean;
  list: TCard[]
}
// type Props = {
//   list: TCard[]
// }

export const Search: React.FC<SearchProps> = ({ closeModal, isOpen }) => {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue.trim() !== '') {
      setLoading(true);
      axiosWithoutAuth
        .get(`https://shop.cyberlearn.vn/api/Product?keyword=${searchValue}`)
        .then((response) => {
          if (Array.isArray(response.data.content)) {
            setProducts(response.data.content);
          } else {
            console.error('API response is not an array:', response.data);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products', error);
          setLoading(false);
        });
    } else {
      setProducts([]);
    }
  }, [searchValue]);

  return (
    <div className={`${css['search-modal']} ${isOpen ? 'open' : ''}`}>
      <span className={css['close-modal']} onClick={closeModal}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <form className={css['search-form']} action="">
        <input
          className={css['search-input']}
          placeholder='Search...'
          autoComplete='off'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={css['search-modal-content']}>
          {products.length > 0 ? (
            <ul>
              {products.map((product:any) => (
                <Card key={product.id} data={product} />
              ))}
            </ul>
          ) : (
            <span className={css['search-text']}>Gõ từ khoá mà bạn muốn tìm</span>
          )}

        </div>
      )}
    </div>
  );
};
