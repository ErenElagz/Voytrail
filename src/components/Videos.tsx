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
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16">
      <h2 className="text-5xl font-black text-gray-800 mb-12">Watch How it is Works?</h2>

      <div className="flex gap-6">
        {/* Large Video on Left */}
        <div className="flex-1 bg-lime-300 rounded-3xl overflow-hidden border-2 border-lime-400">
          <div className="aspect-video ">
            <ReactPlayer src={videos[0]} controls width="100%" height="100%" />
          </div>
        </div>

        {/* Stacked Videos on Right */}
        <div className="w-1/3 flex flex-col gap-6">
          {videos.slice(1).map((video, index) => (
            <div key={index} className="bg-lime-300 rounded-3xl overflow-hidden border-2 border-lime-400 aspect-video">
              <ReactPlayer src={video} controls width="100%" height="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
