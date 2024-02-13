import { HotSellingProduct, Product } from './definitions';
import { useShoppingCart } from 'use-shopping-cart';

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

// when we use use-shopping-cart for addItem function, it need product as a specific object.
export const convertProductToCartProduct = (
  product: Product | HotSellingProduct
) => {
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image_url,
    currency: 'USD',
    price_id: product.strip_id,
  };
};
