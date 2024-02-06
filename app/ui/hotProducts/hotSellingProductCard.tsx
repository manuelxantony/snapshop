"use client";

import Image from "next/image";

import { HotSellingProduct } from "@/app/lib/definitions";

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
      </div>
    </div>
  );
}
