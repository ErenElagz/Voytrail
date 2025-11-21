import React from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // Changed loop to true for continuous carousel

  React.useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden w-full mx-auto my-15">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide  flex-shrink-0 justify-evenly flex-grow-0 basis-full px-20 py-12 min-w-0 bg-teal-800 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-teal-100">
              Create House <br /> Rules <span className="text-teal-200">and</span>
              <br /> Made Event <br /> Schedule
            </span>
            <Image
              src="/slider/1.png"
              alt="Carousel Image 1"
              width={600}
              height={400}
              className="pointer-events-none select-none shadow-lg overflow-visible"
            />
          </div>

          <div className="embla__slide flex-shrink-0  justify-evenly flex-grow-0 basis-full px-20 py-12 min-w-0 bg-lime-300 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-lime-900">
              Share Your <br /> Activites, Links
              <br /> <span className="text-lime-700">and</span> more...
            </span>

            <Image
              src="/slider/2.png"
              alt="Carousel Image 1"
              width={600}
              height={400}
              className="pointer-events-none select-none"
            />
          </div>

          <div className="embla__slide flex-shrink-0  justify-evenly flex-grow-0 basis-full px-20 py-12 min-w-0 bg-indigo-600 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-indigo-50">
              Analyze Your <br /> Guests <span className="text-indigo-200">and</span>
              <br /> Grow Your <br /> Bookings
            </span>

            <Image
              src="/slider/3.png"
              alt="Carousel Image 1"
              width={600}
              height={400}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
