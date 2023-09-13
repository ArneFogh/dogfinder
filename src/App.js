import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreedId, setSelectedBreedId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Fetch the list of breeds using Axios ORALE
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
            // Fetch an image for the selected breed using Axios
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
                <div>
                    <h2>{breeds.find(breed => breed.id === parseInt(selectedBreedId))?.name}</h2>
                    <img src={imageUrl} alt="Selected Breed" style={{ width: '300px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default App;
