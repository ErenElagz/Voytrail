import React from 'react';
import { Icon } from '@iconify/react';
import '@/styles/globals.css';
import useEmblaCarousel from 'embla-carousel-react';

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
          <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0 h-96 bg-blue-200 flex items-center justify-center text-4xl font-bold">
            Slide 1
          </div>
          <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0 h-96 bg-green-200 flex items-center justify-center text-4xl font-bold">
            Slide 2
          </div>
          <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0 h-96 bg-red-200 flex items-center justify-center text-4xl font-bold">
            Slide 3
          </div>
          <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0 h-96 bg-yellow-200 flex items-center justify-center text-4xl font-bold">
            Slide 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
