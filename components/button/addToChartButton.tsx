"use client";

import { HotSellingProduct, Product } from "@/app/lib/definitions";
import { convertProductToCartProduct } from "@/app/lib/utils";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToChartButton({
  btnStyle,
  icon,
  btnName,
  product,
}: {
  btnStyle?: any;
  icon?: any;
  btnName?: string;
  product: Product;
}) {
  const { addItem } = useShoppingCart();

  const addProductToCart = () => {
    const cartProduct = convertProductToCartProduct(product);
    addItem(cartProduct);
  };

  return (
    <button
      className={`${btnStyle}`}
      onClick={() => {
        addProductToCart();
      }}
    >
      <div>{btnName}</div>
      <div>{icon}</div>
    </button>
  );
}
