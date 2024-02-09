"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useShoppingCart } from "use-shopping-cart";

import CartItem from "./cartItem";

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
          <SheetTitle>My Cart({cartCount})</SheetTitle>
        </SheetHeader>
        <>
          {cartCount == 0 ? (
            <div>Your cart is empty</div>
          ) : (
            <ScrollArea>
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
      </SheetContent>
    </Sheet>
  );
}
