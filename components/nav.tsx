import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav({ containerStyles }: { containerStyles: any }) {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Bikes', path: '/our-products' },
  ];
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path == pathname && 'text-accent'}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
