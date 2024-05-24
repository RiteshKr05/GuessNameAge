import { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';

export default function Home() {
  const [result, setResult] = useState(null);

  const fetchData = async (name) => {
    try {
      const ageResponse = await axios.get(`/api/age?name=${name}`);
      const genderResponse = await axios.get(`/api/gender?name=${name}`);
      const countryResponse = await axios.get(`/api/country?name=${name}`);

      setResult({
        age: ageResponse.data.age,
        gender: genderResponse.data.gender,
        country: countryResponse.data.country[0].country_id,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Guess Age, Gender, and Country</h1>
      <Form onSubmit={fetchData} />
      {result && (
        <div>
          <h2>Results:</h2>
          <p>Age: {result.age}</p>
          <p>Gender: {result.gender}</p>
          <p>Country: {result.country}</p>
        </div>
      )}
    </div>
  );
}
