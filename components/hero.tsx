import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="x w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6">
              Where <span>Joyfull</span> Cycling Begins
            </h1>
            <p className="mb-10 mx-auto text-center xl:text-start">
              Experience the exhilarating joy of cycling like never before! Feel
              the rush of freedom as you glide through scenic landscapes and
              bustling city streets. With each pedal, discover new adventures
              and unleash the thrill of the open road. Cycling: where every ride
              is a journey of pure excitement
            </p>
            <div className=" flex justify-center mx-auto xl:mx-0 ">
              <Link href={'/our-products'}>
                <button className="btn btn-accent"> Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex">
            <Image src={'/hero/hero.png'} width={765} height={480} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
