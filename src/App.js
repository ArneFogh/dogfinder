import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DogDisplay from './DogDisplay'; // Import the new component

function App() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreedId, setSelectedBreedId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                setBreeds(response.data);
            })
            .catch(error => {
                console.error("Error fetching breeds:", error);
            });
    }, []);

    const handleBreedChange = (event) => {
        const breedId = event.target.value;
        setSelectedBreedId(breedId);

        if (breedId) {
            axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`)
                .then(response => {
                    setImageUrl(response.data[0]?.url);
                })
                .catch(error => {
                    console.error("Error fetching image:", error);
                });
        } else {
            setImageUrl('');
        }
    };

    return (
        <div className="App">
            <h1>The DogFinder</h1>
            <select value={selectedBreedId || ''} onChange={handleBreedChange}>
                <option value="">Vælg en race</option>
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
            {imageUrl && (
                <DogDisplay 
                    breedName={breeds.find(breed => breed.id === parseInt(selectedBreedId))?.name}
                    imageUrl={imageUrl}
                />
            )}
        </div>
    );
}

export default App;
