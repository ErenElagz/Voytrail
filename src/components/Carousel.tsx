import React from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // Changed loop to true for continuous carousel

  React.useEffect(() => {
    if (emblaApi) {
      // Optional: Add event listeners or other Embla API interactions here
      // For example, to log current slide index on change:
      emblaApi.on('select', () => {
        console.log('Current slide index:', emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden w-full mx-auto my-15">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide flex-shrink-0 justify-evenly  flex-grow-0 basis-full px-20 py-12 min-w-0 bg-blue-100 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-sky-800">
              Create House <br /> Rules <span className="text-sky-600">and</span>
              <br /> Made Event <br /> Schedule
            </span>
            <Image
              src="/slider/1.png"
              alt="Carousel Image 1"
              width={600}
              height={400}
              className="pointer-events-none select-none"
            />
          </div>

          <div className="embla__slide flex-shrink-0  justify-evenly flex-grow-0 basis-full px-20 py-12 min-w-0 bg-blue-100 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-sky-800">
              Share Your <br /> Activites, Links
              <br /> <span className="text-sky-600">and</span> more...
            </span>

            <Image
              src="/slider/2.png"
              alt="Carousel Image 1"
              width={600}
              height={400}
              className="pointer-events-none select-none"
            />
          </div>

          <div className="embla__slide flex-shrink-0  justify-evenly flex-grow-0 basis-full px-20 py-12 min-w-0 bg-blue-100 flex items-center justify-center text-4xl font-bold">
            <span className="text-7xl font-bold leading-tighter tracking-tight text-sky-800">
              Analyze Your <br /> Guests <span className="text-sky-600">and</span>
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
