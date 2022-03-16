import { useParams } from 'react-router-dom';
import './App.css';

function Meaning() {
  const { slug } = useParams();
  const word = slug.split(' ').join('_').toLowerCase();
  return (
    <div className="main-search-section">
      <h1>{word}</h1>
    </div>
  );
}

export default Meaning;
