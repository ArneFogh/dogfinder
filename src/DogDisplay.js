import React from 'react';

const DogDisplay = ({ breedName, imageUrls }) => {
    return (
        <div>
            <h2>{breedName}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`${breedName} ${index + 1}`} style={{ width: '300px', height: 'auto' }} />
                ))}
            </div>
        </div>
    );
}

export default DogDisplay;
