// AddBreed.js
import React, { useState } from 'react';
import styles from './AddBreed.module.css';

function AddBreed() {
    const [breedName, setBreedName] = useState('');

    const handleSubmit = () => {
        // You'd typically send the new breedName to a backend service here
        alert(`Adding new breed: ${breedName}`);
        setBreedName(''); // Clear input
    };

    return (
        <div className={styles.container}>
            <h1>Add a Dog Breed</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Breed name"
                    value={breedName}
                    onChange={e => setBreedName(e.target.value)}
                />
                <button className='addBreedButton' type="submit">Add Breed</button>
            </form>
        </div>
    );
}

export default AddBreed;
