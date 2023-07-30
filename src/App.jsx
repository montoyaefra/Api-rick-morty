import React, { useState, useEffect, useRef } from 'react';
import Header from "./components/Header";
import './App.css';
import Aside from "./components/Aside";
import Cards from "./components/Cards";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchData = async () => {
      try {
        const allData = [];
        let page = 1;

        while (true) {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
          const responseData = await response.json();
          allData.push(...responseData.results);

          if (!responseData.info || !responseData.info.next) {
            break;
          }

          page++;
        }

        if (isMountedRef.current) {
          setData(allData);
          setFilteredData(allData); // Inicialmente, mostrar todos los datos sin filtros
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleFilterChange = (filters) => {
    const { status, gender, species } = filters;

    const filteredCharacters = data.filter((character) => {
      const matchStatus = status.length === 0 || status.includes(character.status);
      const matchGender = gender.length === 0 || gender.includes(character.gender);
      const matchSpecies = species.length === 0 || species.includes(character.species);

      return matchStatus && matchGender && matchSpecies;
    });

    setFilteredData(filteredCharacters);
  };

  const handleFilterInputChange = (value) => {
    setFilterText(value); // Actualiza el estado con el valor del input
  };

  return (
    <>
      <Header onFilterInputChange={handleFilterInputChange} />
      <Aside onFilterChange={handleFilterChange} />
      <Cards data={filteredData} filterText={filterText} />
    </>
  );
}

export default App;
