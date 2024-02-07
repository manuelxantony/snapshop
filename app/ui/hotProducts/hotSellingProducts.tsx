import Link from "next/link";
import HotSellingProductsList from "./hotSellingProductsList";

import { fetchHotSellingProducts } from "@/app/lib/data";

export default async function HotSellingProducts() {
  const hotSellingProducts = await fetchHotSellingProducts();
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">HOT SELLING BIKES</h2>
        <p className="text-center mb-[30px]">
          The World&apos;s Premium Brands In One Destination
        </p>
        <HotSellingProductsList hotSellingProducts={hotSellingProducts} />
        <Link href="/allItems">
          <button className="btn btn-accent mx-auto">See All Bikes</button>
        </Link>
      </div>
    </section>
  );
}
