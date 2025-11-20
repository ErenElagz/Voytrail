import React, { Component } from 'react';
import '@/styles/globals.css';
import ReactPlayer from 'react-player';

export default class Videos extends Component {
  render() {
    return (
      <div className=" w-full max-w-[1000px] flex flex-col w-full mt-10 gap-5">
        <div className=" w-full flex items-center">
          <span className=" text-4xl font-black text-zinc-700">Watch How it is Works?</span>
        </div>
        <div className="flex justify-center items-center gap-10 mt-6 mb-10">
          <ReactPlayer src="https://www.youtube.com/watch?v=LXb3EKWsInQ" controls width="800px" height="200px" />
          <ReactPlayer src="https://www.youtube.com/watch?v=LXb3EKWsInQ" controls width="800px" height="200px" />
          <ReactPlayer src="https://www.youtube.com/watch?v=LXb3EKWsInQ" controls width="800px" height="200px" />
            </div>
      </div>
    );
  }
}
