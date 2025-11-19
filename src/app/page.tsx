'use client';

import { NavBar, Hero, Footer, Companies, Carousel} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans dark:bg-white ">
      <NavBar />
      <Hero />
      <Companies />
      <Carousel />
      <Footer />
    </div>
  );
}
