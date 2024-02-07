import { Product } from "@/app/lib/definitions";

export default function AddToChart({ product }: { product: Product }) {
  return <button className="btn btn-accent">add to chart</button>;
}
