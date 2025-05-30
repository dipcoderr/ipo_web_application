import React from 'react';

const LiveNewsBadge = () => (
  <span style={{
    backgroundColor: '#007bff',
    color: 'white',
    padding: '1px 4px',
    fontSize: '9px',
    borderRadius: '4px',
    position: 'relative',
    top: '1px', // lowers it slightly to align better with text
  }}>
    NEW
  </span>
);

export default LiveNewsBadge;
