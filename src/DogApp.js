import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogDisplay from './DogDisplay';
import BreedSelector from './BreedSelector';
import styles from './DogApp.module.css';

function DogApp() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreedId, setSelectedBreedId] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

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
            axios.all([
                axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`),
                axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`),
                axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`)
            ])
            .then(axios.spread((response1, response2, response3) => {
                setImageUrls([
                    response1.data[0]?.url,
                    response2.data[0]?.url,
                    response3.data[0]?.url
                ]);
            }))
            .catch(error => {
                console.error("Error fetching images:", error);
            });
        } else {
            setImageUrls([]);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Dog Breeds</h1>
            <BreedSelector breeds={breeds} onChange={handleBreedChange} />
            
            {imageUrls.length > 0 && (
                <DogDisplay 
                    breedName={breeds.find(breed => breed.id === parseInt(selectedBreedId))?.name}
                    imageUrls={imageUrls}
                />
            )}
        </div>
    );
}

export default DogApp;
