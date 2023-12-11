import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import { browserName } from 'react-device-detect';
import HLSPlayer from './components/HLSPlayer.js';

const streamKeys = ['TestUser', 'TestUser1', 'TestUser2', 'TestUser3'];

export default function App() {
  return (
    <div>
      <div className="headerImg">
        <img src="./public/DemoSite_Logo.png" />
      </div>
      <div className="videoPlayers">
        <div className="players">
          {browserName === 'Safari' ? (
            <HLSPlayer streamKey={'TestUser'} />
          ) : (
            <ShakaWrapper streamKey={'TestUser'} />
          )}
          {browserName === 'Safari' ? (
            <HLSPlayer streamKey={'TestUser1'} />
          ) : (
            <ShakaWrapper streamKey={'TestUser1'} />
          )}
        </div>
      </div>
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       <div className="headerImg">
//         <img src="./public/DemoSite_Logo.png" />
//       </div>
//       <div className="videoPlayers">
//         <div className="players">
//           {browserName === 'Safari' ? (
//             <HLSVideo key={'TestUser'} />
//           ) : (
//             <ShakaWrapper key={'TestUser'} />
//           )}
//           {browserName === 'Safari' ? (
//             <HLSVideo key={'TestUser1'} />
//           ) : (
//             <ShakaWrapper key={'TestUser1'} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function HLSVideo({ key }) {
//   return (
//     <video
//       width="620"
//       controls
//       autoPlay
//       style={{
//         display: 'block',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//       }}
//     >
//       <source
//         src={`http://localhost:3000/wavejs/${key}/manifest.m3u8`}
//         //src="http://localhost:3000/wavejs/mvp-demo/manifest.m3u8"
//         type="application/x-mpegURL"
//       />
//       {/* <source src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/ogg" /> */}
//     </video>
//   );
// }

// const ShakaWrapper = ({ key }) => {
//   const controllerRef = useRef(null);

//   useEffect(() => {
//     const {
//       /** @type {shaka.Player} */ player,
//       /** @type {shaka.ui.Overlay} */ ui,
//       /** @type {HTMLVideoElement} */ videoElement,
//     } = controllerRef.current;
//     ß;

//     async function loadAsset() {
//       const streamLocation = `http://localhost:3000/wavejs/${key}/manifest.mpd`;
//       // Load an asset.
//       //await player.load('http://localhost:3000/wavejs/TestUser/manifest.mpd');
//       //await player.load('http://localhost:3000/wavejs/mvp-demo/manifest.mpd');
//       await player.load(streamLocation);

//       // Trigger play.
//       videoElement.play();
//     }

//     loadAsset();
//   }, []);

//   return <ShakaPlayer ref={controllerRef} />;
// };
