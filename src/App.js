import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreedId, setSelectedBreedId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Fetch the list of breeds
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => {
                setBreeds(data);
            });
    }, []);

    const handleBreedChange = (event) => {
        const breedId = event.target.value;
        setSelectedBreedId(breedId);

        if (breedId) {
            // Fetch an image for the selected breed
            fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`)
                .then(response => response.json())
                .then(data => {
                    setImageUrl(data[0]?.url);
                });
        } else {
            setImageUrl('');
        }
    };

    return (
        <div className="App">
            <h1>Select a Dog Breed</h1>
            <select value={selectedBreedId || ''} onChange={handleBreedChange}>
                <option value="">-- Select a breed --</option>
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
            {imageUrl && (
                <div>
                    <img src={imageUrl} alt="Selected Breed" style={{ width: '300px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default App;
