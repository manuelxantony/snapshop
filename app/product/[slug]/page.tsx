// here we can pass product id/slug to fetch data based on that
// but as this is a minimal application plus we are already fetching product details for hot selling prodcut,
// so we are using that data to show description here.
// this can reduce server operations(by not fetching data every time) but can effect memory when scaling..

import { Product } from "@/app/lib/definitions";

export default function ProductDetails({ product }: { product: Product }) {
  return <div>product details page</div>;
}
