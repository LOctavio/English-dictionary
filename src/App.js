import './App.css';
import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div className="main-search-section">
        <h1>Search a word to find the meaning</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type word"
            aria-label="Word"
            aria-describedby="basic-addon2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              setInput('hi');
              navigate(`/meaning/${input}`);
            }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default App;
