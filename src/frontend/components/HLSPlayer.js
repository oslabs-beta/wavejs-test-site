import React from 'react';

export default function HLSPlayer({ streamKey }) {
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
        src={`http://localhost:3000/wavejs/${streamKey}/manifest.m3u8`}
        type="application/x-mpegURL"
      />
    </video>
  );
}
