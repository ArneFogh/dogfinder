import React from 'react';

const DogDisplay = ({ breedName, imageUrl }) => {
    return (
        <div>
            <h2>{breedName}</h2>
            <img src={imageUrl} alt={breedName} style={{ width: '300px', height: 'auto' }} />
        </div>
    );
}

export default DogDisplay;
