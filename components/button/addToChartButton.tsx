'use client';

import { HotSellingProduct, Product } from '@/app/lib/definitions';
import { convertProductToCartProduct } from '@/app/lib/utils';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '@/components/ui/use-toast';
import { ToastClose } from '@/components/ui/toast';

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
  const { toast } = useToast();

  const addProductToCart = () => {
    const cartProduct = convertProductToCartProduct(product);
    addItem(cartProduct);
    toast({ title: `${product.name} added to the cart` });
    // setTimeout(ToastClose(), 1000);
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
