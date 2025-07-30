import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contact', { name });
    alert('Form submitted!');
    setName('');
  };

  return (
    <div>
      <h2>My Personal Website</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
