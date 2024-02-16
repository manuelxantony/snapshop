import { fetchProducts } from '@/app/lib/data';
import ProductCategory from '@/components/products/productCategory';

export default async function OurProducts() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div>
      <ProductCategory products={products} />
    </div>
  );
}
