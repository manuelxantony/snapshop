'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useShoppingCart } from 'use-shopping-cart';

import CartItem from '@/components/cart/cartItem';
import CheckoutBtn from '@/components/button/checkoutButton';

export default function CartSideBar() {
  const {
    cartCount,
    cartDetails,
    handleCartClick,
    shouldDisplayCart,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-12">My Cart({cartCount})</SheetTitle>
        </SheetHeader>
        <>
          {cartCount == 0 ? (
            <div className="flex flex-col w-full  h-full justify-center items-center">
              <h5 className="text-black/50">Your cart is empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
        {cartCount! > 0 && (
          <div>
            <div className="flex justify-between mb-4">
              <div className="font-semibold uppercase">Total</div>
              <div>${totalPrice}</div>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
