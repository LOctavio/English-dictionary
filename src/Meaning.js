import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function Meaning() {
  const { slug } = useParams();
  const word = slug.split(' ').join('_').toLowerCase();
  const [wordData, setWordData] = useState([{ message: 'Loading data' }]);

  const fetchData = async () => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .catch(() => console.log('error'));
    const { data } = response || { data: [{ message: 'Not found' }] };
    console.log(data);
    setWordData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageData = () => {
    if (wordData[0].word) {
      return (
        <div>
          <h1>{wordData[0].word}</h1>
        </div>
      );
    }
    return (<h1>{wordData[0].message}</h1>);
  };

  return (
    <div>
      {pageData()}
    </div>
  );
}

export default Meaning;
