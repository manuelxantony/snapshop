import Hero from '@/components/hero';
import './globals.css';
import HotSellingProducts from '@/components/hotProducts/hotSellingProducts';

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <HotSellingProducts />
      </div>
    </main>
  );
}
