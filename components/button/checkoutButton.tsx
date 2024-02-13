import { error } from 'console';
import { useShoppingCart } from 'use-shopping-cart';

export default function CheckoutBtn() {
  const { redirectToCheckout } = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="btn btn-primary w-full" onClick={handleCheckout}>
      Proceed To Chekout
    </button>
  );
}
