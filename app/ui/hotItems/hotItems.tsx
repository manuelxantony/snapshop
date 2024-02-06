import Link from "next/link";
import HotItemsList from "./hotItemsList";

export default function HotItems() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">HOT SELLING ITEMS</h2>
        <p className="text-center mb-[30px]">
          The World&apos;s Premium Brands In One Destination
        </p>
        <HotItemsList />
        <Link href="/allItems">
          <button className="btn btn-accent mx-auto">See All Items</button>
        </Link>
      </div>
    </section>
  );
}
