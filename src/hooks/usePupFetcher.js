import { useEffect, useState} from 'react';
import axios from 'axios';

const usePupFetcher = (breed) => {

  const [picture, setPicture] = useState('');
  const [isError, setError] = useState(false);

    const dogQuery = async (breed) => {
      try {
        const results = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        setError(false);
        setPicture(results.data.message);
      } catch {
        setError(true);
      }
    };

    useEffect(() => {
      dogQuery(breed);
    }, [breed]);

    if (isError) {
      return [false, dogQuery];
    } else {
      return [picture, dogQuery];
    }

}

export default usePupFetcher;