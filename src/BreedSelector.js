import React from 'react';
import styles from './BreedSelector.module.css';

function BreedSelector({ breeds, onChange }) {
    return (
        <div className={styles.selectorWrapper}>
            <select onChange={onChange}>
                <option value="">Select a breed</option>
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BreedSelector;
