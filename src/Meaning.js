import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function Meaning() {
  const { slug } = useParams();
  const word = slug.split(' ').join('_').toLowerCase();
  let wordData = {};

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      ).then((response) => {
        const { data } = response;
        wordData = data;
      }).catch((error) => {
        // Error
        if (error.response) {
          wordData = { error: 'We have no registers about this word' };
        } else {
          console.log('Error', error.message);
        }
      });
      console.log(wordData);
    };

    fetchData();
  }, []);

  return (
    <div className="main-search-section">
      <h1>{word}</h1>
    </div>
  );
}

export default Meaning;
