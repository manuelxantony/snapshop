import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, PackageCheck, RefreshCw } from "lucide-react";

import { fetchProductViaSlug } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import AddToChartButton from "@/app/ui/addToChartButton";

export default async function ProductDetails({ params }: any) {
  const product: Product[] = await fetchProductViaSlug(params.slug);
  console.log(product[0]);
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[500px] flex justify-center items-center">
            <Image
              src={`${product[0].image_url}`}
              width={473}
              height={290}
              priority
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link
              href="/"
              className="flex justify-center items-center font-semibold"
            >
              <ChevronLeft size={20} />
              Back To Home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{product[0].name}</h3>
                <h4>${product[0].price}</h4>
              </div>
              <p>{product[0].description}</p>
              <AddToChartButton btnStyle="btn btn-accent" text="Add To Chart" />
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on all orders</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 7 days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
