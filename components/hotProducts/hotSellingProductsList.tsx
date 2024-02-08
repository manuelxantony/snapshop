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
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        pagination={true}
        modules={[Pagination]}
        className="hot-selling-products-slider mb-8"
      >
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
