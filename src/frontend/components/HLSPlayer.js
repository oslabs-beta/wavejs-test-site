import React from 'react';

export default function HLSPlayer({ streamSource }) {
  return (
    <video
      width="620"
      controls
      autoPlay
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <source
        src={streamSource}
        // src={`http://localhost:3000/wavejs/live/${streamKey}/manifest.m3u8`}
        type="application/x-mpegURL"
      />
    </video>
  );
}
