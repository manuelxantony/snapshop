import Link from 'next/link';

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookFill,
  RiPinterestFill,
} from 'react-icons/ri';

import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="leading-tight mb-2">Subscribe to our newsletter</h2>
            <p className="text-white/60 mb-5">
              Be first to get the latest news about trends , promotions and much
              more!
            </p>
          </div>
          {/* form */}
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your email address" />
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">
              Join
            </button>
          </form>
          {/* socials */}
          <div className=" flex flex-row gap-8 mx-auto text-[20px] text-white/60 mb-5">
            <Link href="">
              <RiYoutubeFill />
            </Link>
            <Link href="">
              <RiTwitterFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiFacebookFill />
            </Link>
            <Link href="">
              <RiPinterestFill />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Bikezz. All rights reserved{' '}
      </div>
    </footer>
  );
}
