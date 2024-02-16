'use client';

import { useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';

import { Product } from '@/app/lib/definitions';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ProductCard from './productCard';

export default function ProductCategory({ products }: { products: Product[] }) {
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(900);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        category === 'all' ? products : product.category == category;
      const priceMatch = product.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  }, [category, price, products]);
  console.log(price);
  console.log(filteredProducts);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup defaultValue="all" className="gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => {
                    setCategory('all');
                  }}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="road"
                  id="road"
                  onClick={() => {
                    setCategory('road bike');
                  }}
                />
                <label htmlFor="road">Road</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="professional"
                  id="professional"
                  onClick={() => {
                    setCategory('professional bike');
                  }}
                />
                <label htmlFor="professional">Professional</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extreme"
                  id="extreme"
                  onClick={() => {
                    setCategory('extreme bike');
                  }}
                />
                <label htmlFor="extreme">Extreme</label>
              </div>
            </RadioGroup>
            {/* price slider */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{' '}
                <span className="text-accent font-semibold ml-2">${price}</span>
                <span className="ml-2">
                  (
                  {filteredProducts.length > 1
                    ? `${filteredProducts.length} items`
                    : '0 item'}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                min={100}
                step={1}
                onValueChange={(val) => {
                  setPrice(val[0]);
                }}
              ></Slider>
            </div>
          </aside>
          {/* products */}
          <div className=" w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredProducts.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
