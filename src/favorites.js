import React, { useState, useEffect } from 'react';
import styles from './Favourites.module.css';

function Favourites() {
    const [breedName, setBreedName] = useState('');

    const handleSubmit = () => {
        alert(`Adding new breed: ${breedName}`);
        setBreedName(''); // Clear input
    };

function addToFavorites(breedName) {
  // Get the current favorites from local storage
  const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Check if the breed is already a favorite
  if (currentFavorites.includes(breedName)) {
    alert('This breed is already in your favorites!');
    return;
  }

  // Check if the user has already added 3 breeds to favorites
  if (currentFavorites.length >= 3) {
    alert('You can only add up to 3 breeds to favorites.');
    return;
  }

  // Add the breed to favorites and save it to local storage
  const newFavorites = [...currentFavorites, breedName];
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
}


function DisplayFavorites() {
    const [favorites, setFavorites] = useState([]);
    const [reload, setReload] = useState(false);  // New state

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, [reload]);  // Updated dependency array

    function deleteFromFavorites(breedToDelete) {
        const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const newFavorites = currentFavorites.filter(breed => breed !== breedToDelete);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setFavorites(newFavorites);
        setReload(!reload);  // Toggle the reload state
    }

    return (
        <div>
            <h2>Your Favorite Breeds</h2>
            <ul>
                {favorites.map(breed => (
                    <li key={breed}>
                        {breed}
                        <button className={styles.deleteButton} onClick={() => deleteFromFavorites(breed)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

return (
    <div className={styles.container}>
        <h1>Add to favourite</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Breed name"
                value={breedName}
                onChange={e => setBreedName(e.target.value)}
            />
            <button onClick={() => addToFavorites(breedName)}>Favourite</button>
        </form>
        <DisplayFavorites />
    </div>
);
}

export default Favourites;