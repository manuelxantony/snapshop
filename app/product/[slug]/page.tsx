import { fetchProductViaSlug } from "@/app/lib/data";

export default async function ProductDetails({ params }: any) {
  const product = await fetchProductViaSlug(params.slug);
  console.log(product);
  return <div>product details page</div>;
}
