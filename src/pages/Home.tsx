import React from 'react';
import YouTube from 'react-youtube';

const Home: React.FC = () => {
  const opts = {
    height: '390',
    width: '640',
  };
  return (
    <div>
      기생충
      <YouTube videoId={'jBdRhhSt3Bc'} onReady={(event) => event.target.pauseVideo()} opts={opts}></YouTube>
    </div>
  );
};

export default Home;
