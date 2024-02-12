'use client';

import { CartProvider as CProvider } from 'use-shopping-cart';

export default function CartProvider({ children }: { children: any }) {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIP_PUBLIC_KEY!}
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
