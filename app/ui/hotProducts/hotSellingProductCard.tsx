"use client";

import Image from "next/image";
import Link from "next/link";
import { CgEye } from "react-icons/cg";

import { HotSellingProduct } from "@/app/lib/definitions";
import AddToChart from "@/app/ui/addToChart";

export default function HotSellingProductCard({
  hotSellingProduct,
}: {
  hotSellingProduct: HotSellingProduct;
}) {
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
            src={hotSellingProduct.image_url}
            width={240}
            height={147}
            alt={`${hotSellingProduct.name} image`}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] 
        opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <AddToChart product={hotSellingProduct} />
          <Link href={`/product/${hotSellingProduct.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5>{hotSellingProduct.name}</h5>
      <h4 className="text-accent">${hotSellingProduct.price}</h4>
    </div>
  );
}
