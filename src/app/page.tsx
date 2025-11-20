'use client';

import {
  NavBar,
  Hero,
  Companies,
  Carousel,
  Videos,
  ForWhom,
  Features,
  Footer,
  Compares,
  Pricing,
  Newsletter,
  FAQ,
  Testimonials,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-sans dark:bg-white ">
      <NavBar />
      <Hero />
      <Companies />
      <Carousel />
      <Videos />
      <ForWhom />
      <Features />
      <Compares />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}
