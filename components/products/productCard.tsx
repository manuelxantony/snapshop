'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingBag } from 'react-icons/cg';

import { Product } from '@/app/lib/definitions';
import AddToChartButton from '@/components/button/addToChartButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div
          className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-200
        flex justify-center items-center"
        >
          <div className="absolute top-8 left-8 bg-accent px-3 text-white text-sm uppercase font-medium">
            Hot Selling
          </div>
          <Image
            src={product.image_url}
            width={240}
            height={147}
            alt={`${product.name} image`}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] 
        opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <AddToChartButton
            btnStyle="btn-icon btn-accent"
            icon={<CgShoppingBag />}
            product={product}
          />
          <Link href={`/product/${product.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <div className="text-[13px] text-black/50 mb-2 uppercase font-bold">
        {product.category}
      </div>
      <h5>{product.name}</h5>
      <h4 className="text-accent">${product.price}</h4>
    </div>
  );
}
