import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CustomCard from '../../Components/CustomCard/CustomCard.jsx';
import './FilterPage.css'; 

const FilterPage = () => {
  const { gender } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);

        const normalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
        const encodedGender = encodeURIComponent(normalizedGender);
        const url = `https://dragonball-api.com/api/characters?limit=100&gender=${encodedGender}`;
        console.log('URL de la solicitud:', url);

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Error al obtener los personajes: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Respuesta de la API:', data);

        if (!Array.isArray(data)) {
          throw new Error('La respuesta de la API no es un arreglo de personajes válido');
        }

        setCharacters(data);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    const validGenders = ['Male', 'Female', 'acerdade'];
    const normalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();
    if (validGenders.includes(normalizedGender)) {
      fetchCharacters();
    } else {
      setError('Género no válido. Usa "Male" o "Female".');
      setLoading(false);
    }
  }, [gender]);

  if (loading) {
    return <main>Cargando personajes...</main>;
  }

  if (error) {
    return <main>Error: {error}</main>;
  }

  if (characters.length === 0) {
    return <main>No se encontraron personajes para el género "{gender}".</main>;
  }

  return (
    <main className="cards-container">
      {characters.map((character) => (
        <Link to={`/personaje/${character.id}`} key={character.id}>
          <CustomCard character={character} isDetailPage={false} />
        </Link>
      ))}
    </main>
  );
};

export default FilterPage;