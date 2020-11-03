import React, { useState } from 'react';

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function onHighlightMove(e) {
    // console.log(e.nativeEvent);
    //update highlightStyle to move the highlight
    setHighlightStyle({ left: e.nativeEvent.layerX - 150 });
  }

  function onHighlightOut(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div className='tab' onMouseMove={onHighlightMove} onMouseOut={onHighlightOut}>
      <div className='highlight' style={highlightStyle} />
      {children}
    </div>
  );
}
