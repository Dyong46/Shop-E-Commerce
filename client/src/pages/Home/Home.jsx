import { useEffect, useState } from 'react';
import AsideFilter from './components/AsideFilter';
import Product from './components/Product';
import SortProductList from './components/SortProductList';
import { productGetAll } from '~/servers/productService';

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let res = await productGetAll();
    if (res) {
      setProducts(res);
    }
    console.log(res);
  };

  return (
    <div className="bg-gray-200 py-6">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <AsideFilter />
          </div>
          <div className="col-span-9">
            <SortProductList />
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products &&
                products.length > 0 &&
                products.map((product) => {
                  return (
                    <div className="col-span-1" key={product.id}>
                      <Product product={product} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
