import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

function App() {
  const [definition, setDefinition] = useState();

  const getDefinition = async (text) => {
    const response = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    setDefinition(response.data);
    console.log(definition);
  };

  return (
    <>
      <div className="main-search-section">
        <h1>Search a word to find the meaning</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type word"
            aria-label="Word"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={(e) => getDefinition(e.target.previousElementSibling.value)}>
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default App;
