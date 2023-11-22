import { useEffect, useState } from 'react';
import AsideFilter from './components/AsideFilter';
import Product from './components/Product';
import SortProductList from './components/SortProductList';
import { productGetAll } from '~/servers/productService';
import { categoriesGetAll } from '~/servers/categoryService';
import useQueryConfig from '~/hooks/useQueryConfig';
import Pagination from '~/components/Pagination';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const queryConfig = useQueryConfig();

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  // Call the getProducts method and getCategories methods
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // Get all products
  const getProducts = async () => {
    let res = await productGetAll();
    if (res) {
      setProducts(res);
    }
  };

  // Get all categories
  const getCategories = async () => {
    let res = await categoriesGetAll();
    if (res) {
      setCategories(res);
    }
  };

  return (
    <div className="bg-gray-200 py-6">
      <Helmet>
        <title>Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động hoặc Website</title>
        <meta name='description' content='Trang chủ dự án Shopee' />
      </Helmet>
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <AsideFilter queryConfig={queryConfig} categories={categories} />
          </div>
          <div className="col-span-9">
            <SortProductList queryConfig={queryConfig} pageSize={2} />
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
            <Pagination queryConfig={queryConfig} pageSize={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
