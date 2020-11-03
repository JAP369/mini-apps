import React, { useState } from 'react';
import Marked from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('#sup');

  const handleTextAreaChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='app'>
      <textarea onChange={handleTextAreaChange} value={markdown} />
      {/* <div className='preview' dangerouslySetInnerHTML={{ __html: Marked(markdown) }}></div> */}

      <ReactMarkdown className='preview' source={markdown} />
    </div>
  );
}
