"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { HotSellingProduct } from "@/app/lib/definitions";
import HotSellingProductCard from "./hotSellingProductCard";

export default function HotSellingProductsList({
  hotSellingProducts,
}: {
  hotSellingProducts: HotSellingProduct[];
}) {
  return (
    <div>
      <Swiper>
        {hotSellingProducts.map((hotSellingProduct) => (
          <option key={hotSellingProduct.id}>
            <SwiperSlide>
              <HotSellingProductCard hotSellingProduct={hotSellingProduct} />
            </SwiperSlide>
          </option>
        ))}
      </Swiper>
    </div>
  );
}
