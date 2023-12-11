import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';

export default function ShakaWrapper({ streamKey }) {
  const controllerRef = useRef(null);

  useEffect(() => {
    const {
      /** @type {shaka.Player} */ player,
      /** @type {shaka.ui.Overlay} */ ui,
      /** @type {HTMLVideoElement} */ videoElement,
    } = controllerRef.current;
    ß;

    async function loadAsset() {
      const streamLocation = `http://localhost:3000/wavejs/${streamKey}/manifest.mpd`;
      // Load an asset.
      await player.load(streamLocation);

      // Trigger play.
      videoElement.play();
    }

    loadAsset();
  }, []);

  return <ShakaPlayer ref={controllerRef} />;
}
