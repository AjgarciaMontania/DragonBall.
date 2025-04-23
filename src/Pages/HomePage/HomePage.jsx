import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import CustomCard from '../../Components/CustomCard/CustomCard';

const HomePage = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://dragonball-api.com/api/characters?limit=100')
                
                if (!response.ok) {
                    throw new Error(`Error HTTP! estado: ${response.status}`)
                }
                
                const data = await response.json()
                
                // La API correcta devuelve los personajes en data.items
                if (data && data.items && Array.isArray(data.items)) {
                    setCharacters(data.items)
                } else {
                    throw new Error('Formato de datos inesperado de la API')
                }
            } catch (err) {
                console.error("Error al obtener personajes:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchCharacters()
    }, [])

    if (loading) return <main><p>Cargando personajes...</p></main>
    if (error) return <main><p>Error: {error}</p></main>
    if (!characters.length) return <main><p>No se encontraron personajes</p></main>

    return (
        <main style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '1rem', 
            padding: '1rem' 
        }}>
            {characters.map((character) => (
                <Link to={`/personaje/${character.id}`} key={character.id}>
                    <CustomCard character={character} />
                </Link>
            ))}
        </main>
    )
}

export default HomePage