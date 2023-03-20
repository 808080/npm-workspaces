import React, { useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:3000/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const body = await res.json();
      setContent(body.success ? body.message : body.error);
    } catch (error) {
      setContent(error instanceof Error ? error.message : JSON.stringify(error));
    }
  };

  return <div>
    <p>
      Hello world!
    </p>
    <button onClick={handleClick}>Server handshake</button>

    <pre>{content}</pre>
  </div>
};

export default App;