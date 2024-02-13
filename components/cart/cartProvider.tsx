'use client';

import { CartProvider as CProvider } from 'use-shopping-cart';

export default function CartProvider({ children }: { children: any }) {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIP_KEY!}
      successUrl="http://localhost:3001/strip/sucess"
      cancelUrl="http://localhost:3001/strip/error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
}
