import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data';

function HomeScreen() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/product');
      setProduct(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Product</h1>
      <div className="products">
        {product.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>
                  <strong>${product.name}</strong>
                </p>
              </Link>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
