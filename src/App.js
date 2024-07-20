import React, { useRef } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const iframesRef = useRef([]);

  const tracks = [
    "https://open.spotify.com/embed/track/0ROW5t0PWyBS6k0UizBr6c?utm_source=generator",
    "https://open.spotify.com/embed/track/0qdiNx11tQtjFCqbko9i2k?utm_source=generator",
    "https://open.spotify.com/embed/track/6b2WJDzGt5X8dYfpkWtvXW?utm_source=generator",
    "https://open.spotify.com/embed/track/73qEZ1uDm4V2jq9EeXWM8G?utm_source=generator",
    "https://open.spotify.com/embed/track/1kFNFsAZ4iZy4vjBEtT12I?utm_source=generator"
  ];

  const handleIframeClick = (index) => {
    iframesRef.current.forEach((iframe, i) => {
      if (iframe && i !== index) {
        iframe.contentWindow.postMessage('{"method":"pause"}', '*');
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyMusic</h1>
        <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={false} interval={3000} className='caro'>
          {tracks.map((track, index) => (
            <div key={index} className='box'>
              <iframe
                ref={el => iframesRef.current[index] = el}
                onClick={() => handleIframeClick(index)}
                style={{ borderRadius: '12px' }}
                src={track}
                width="50%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </Carousel>
      </header>
    </div>
  );
}

export default App;
