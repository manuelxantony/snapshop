"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: any }) {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl="sucess"
      cancelUrl="error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
}
