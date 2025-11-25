import React from 'react';
import '@/styles/globals.css';
import ReactPlayer from 'react-player';

export default function Videos() {
  const videos = [
    'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    'https://www.youtube.com/watch?v=LXb3EKWsInQ',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold tracking-tight text-black mb-8">Watch How it Works</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Large Video on Left */}
        <div className="w-full md:flex-1 rounded-3xl overflow-hidden">
          <ReactPlayer
            src={videos[0]}
            controls
            light
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16/9',
            }}
          />
        </div>

        {/* Stacked Videos on Right */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {videos.slice(1).map((video, index) => (
            <div key={index} className="rounded-3xl overflow-hidden aspect-video">
              <ReactPlayer
                src={video}
                controls
                light
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
