import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import { browserName } from 'react-device-detect';
import HLSPlayer from './components/HLSPlayer.js';
import ShakaWrapper from './components/ShakaPlayer.js';

export default function App() {
  const streamKeys = ['TestUser', 'TestUser1', 'TestUser2', 'TestUser3'];

  const currentStreams = [];

  streamKeys.forEach((key) => {
    currentStreams.push(
      <div className="player">
        {browserName === 'Safari' ? (
          <HLSPlayer streamKey={key} />
        ) : (
          <ShakaWrapper streamKey={key} />
        )}
      </div>
    );
  });

  return (
    <div>
      <div className="headerImg">
        <img src="./public/DemoSite_Logo.png" />
      </div>
      <div className="videoPlayers">{currentStreams}</div>
    </div>
  );
}
