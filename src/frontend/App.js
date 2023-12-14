import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import { browserName } from 'react-device-detect';
import HLSPlayer from './components/HLSPlayer.js';
import ShakaWrapper from './components/ShakaPlayer.js';

export default function App() {
  const streamKeys = ['TestUser', 'TestUser1'];
  //const streamKeys = ['TestUser', 'TestUser1', 'TestUser2', 'TestUser3'];

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
      <div className="videoPlayers">
        <div className="player">
          {browserName === 'Safari' ? (
            <HLSPlayer
              // streamSource={
              //   'http://localhost:3000/wavejs/live/TestUser/manifest.m3u8'
              // }
              streamSource={
                'http://localhost:3000/wavejs/playback/TestUser/LBG16OR2/manifest.m3u8'
              }
            />
          ) : (
            <ShakaWrapper streamKey={key} />
          )}
        </div>
        <div className="player">
          {browserName === 'Safari' ? (
            <HLSPlayer
              streamSource={
                'http://localhost:3000/wavejs/playback/TestUser1/BZ6IZ5F8/manifest.m3u8'
              }
            />
          ) : (
            <ShakaWrapper streamKey={key} />
          )}
        </div>
        <div className="player">
          {browserName === 'Safari' ? (
            <HLSPlayer
              streamSource={
                'http://localhost:3000/wavejs/playback/TestUser2/81PU7F6D/manifest.m3u8'
              }
            />
          ) : (
            <ShakaWrapper streamKey={key} />
          )}
        </div>
        <div className="player">
          {browserName === 'Safari' ? (
            <HLSPlayer
              streamSource={
                'http://localhost:3000/wavejs/playback/TestUser3/IED93LCE/manifest.m3u8'
              }
            />
          ) : (
            <ShakaWrapper streamKey={key} />
          )}
        </div>
      </div>
    </div>
  );
}
