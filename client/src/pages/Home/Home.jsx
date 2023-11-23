import AsideFilter from './components/AsideFilter';
import Product from './components/Product';
import SortProductList from './components/SortProductList';
import { getProducts } from '~/servers/productService';
import { categoriesGetAll } from '~/servers/categoryService';
import useQueryConfig from '~/hooks/useQueryConfig';
import Pagination from '~/components/Pagination';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const queryConfig = useQueryConfig();

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return getProducts(queryConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  console.log(productsData);

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoriesGetAll()
    }
  })

  return (
    <div className="bg-gray-200 py-6">
      <Helmet>
        <title>Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động hoặc Website</title>
        <meta name='description' content='Trang chủ dự án Shopee' />
      </Helmet>
      <div className="container max-h-fit">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <AsideFilter queryConfig={queryConfig} categories={categoriesData || []} />
          </div>
          <div className="col-span-9">
            <SortProductList queryConfig={queryConfig} pageSize={productsData?.totalPages} />
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {productsData?.content.map((product) => {
                return (
                  <div className="col-span-1" key={product.id}>
                    <Product product={product} />
                  </div>
                );
              })}
            </div>
            <Pagination queryConfig={queryConfig} pageSize={productsData?.totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
