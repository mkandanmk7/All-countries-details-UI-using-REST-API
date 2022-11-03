import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';

function App() {

  const [countries, setCountries] = useState([]);


  const getAllCountries = async () => {

    let all_countries_url = "https://restcountries.com/v2/all";

    let res = await axios.get(all_countries_url);
    console.log("result of response:", res);
    if (res.status === 200) {
      setCountries(res.data);
    }
  }

  useEffect(() => {
    getAllCountries();
  }, [])

  console.log("countires:", countries)
  return (
    <div className="countries_container">
      {countries.map((country) => {
        return <CountryCard country={country} />
      })
      }
    </div>
  );
}

export default App;
