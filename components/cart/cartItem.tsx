import Image from 'next/image';
import { FaMinus, FaPlus, FaX } from 'react-icons/fa6';
import { useShoppingCart } from 'use-shopping-cart';

export default function CartItem({ item }: { item: any }) {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      <div className="w-[110px] h-[110px] relative">
        <Image
          src={item.image}
          fill
          priority
          alt=""
          sizes="(max-width:110px) 110px 110px"
          className="object-contain"
        />
      </div>
      {/* name price quantity remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        {/* name and remove button */}
        <div className="flex ites-center justify-between">
          <h5>{item.name}</h5>
          <button
            onClick={() => {
              removeItem(item.id);
            }}
          >
            <FaX className="text-sm border-2 border-black" />
          </button>
        </div>
        {/* -, + button and total price */}
        <div className="flex justify-between items-center">
          {/* -, + button */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                decrementItem(item.id);
              }}
            >
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button
              onClick={() => {
                incrementItem(item.id);
              }}
            >
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            {item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
}
