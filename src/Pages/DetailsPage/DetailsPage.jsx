import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomCard from '../../Components/CustomCard2/CustomCard2.jsx';

const DetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://dragonball-api.com/api/characters/${id}`;
        console.log('URL de la solicitud:', url);

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Error al obtener el personaje: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Respuesta de la API:', data);

        if (!data || typeof data !== 'object') {
          throw new Error('La respuesta de la API no contiene un personaje válido');
        }

        const mappedCharacter = {
          id: data.id,
          name: data.name,
          race: data.race,
          gender: data.gender,
          ki: data.ki, // La API usa "ki"
          maxKi: data.maxKi, // La API usa "maxKi"
          affiliation: data.affiliation,
          image: data.image,
        };
        
        console.log('Objeto mapeado (character):', mappedCharacter);
        setCharacter(mappedCharacter);
      } catch (err) {
        setError(err.message);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <main>Cargando detalles del personaje...</main>;
  }

  if (error) {
    return <main>Error: {error}</main>;
  }

  if (!character) {
    return <main>No se encontró el personaje con ID "{id}".</main>;
  }

  return (
    <main className="details-page">
      <CustomCard character={character} isDetailPage={true} />
    </main>
  );
};

export default DetailsPage;