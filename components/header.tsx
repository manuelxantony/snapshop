'use client';

import Link from 'next/link';
import { CgShoppingBag } from 'react-icons/cg';

import Nav from '@/components/nav';
import CartSideBar from '@/components/cart/cartSideBar';
import { useShoppingCart } from 'use-shopping-cart';

export default function Header() {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="contianer mx-auto flex justify-between px-2">
        <Link href={'/'}>
          <h2>
            <span className="text-accent">B</span>ikezz
          </h2>
        </Link>
        <div className="flex items-center gap-5">
          <Nav containerStyles="flex gap-[36px]" />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div
              className="bg-accent h-[18px] w-[18px] absolute -right-1 -bottom-1 
              rounded-full text-white flex justify-center items-center text-sm font-medium"
            >
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
}
