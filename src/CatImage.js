import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CatImage.css';

function CatImage() {
    const [imageUrl, setImageUrl] = useState('null');
    const [catDetails, setCatDetails] = useState('null');

    useEffect(() => {
        handleGetCatImage()
    }, []);

    const handleGetCatImage = async () => {
        try {
            const getCatId = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1');
            const catDetails = await axios.get(`https://api.thecatapi.com/v1/images/${getCatId.data[0].id}`);
            console.log('catDetails', catDetails);
            setImageUrl(catDetails.data.url)
            setCatDetails(catDetails.data.breeds[0])
        } catch (error) {
            console.log('error', error)
        }
    };

    return (
        <>
            <div>
                <button onClick={handleGetCatImage}>Change Cat Image</button>
            </div>
            <div >
                {imageUrl &&
                    <>
                        <img src={imageUrl} alt="Cat" />
                        <h4>Cat Name : {catDetails.name}</h4>
                        <p><span>Description : </span> {catDetails.description}</p>
                        <p><span>origin : </span> {catDetails.origin}</p>
                        <p><span>temperament : </span> {catDetails.temperament}</p>
                        <p><span>reference_image_id : </span> {catDetails.reference_image_id}</p>
                        <p><span>vocalisation : </span> {catDetails.vocalisation}</p>
                        <p><span>dog_friendly : </span> {catDetails.dog_friendly}</p>
                        <p><span>energy_level : </span> {catDetails.energy_level}</p>
                        <p><span>experimental : </span> {catDetails.experimental}</p>
                        <p><span>id : </span> {catDetails.id}</p>
                        <p><span>life_span : </span> {catDetails.life_span}</p>
                        <p><span>health_issues : </span> {catDetails.health_issues}</p>
                        <p><span>hypoallergenic : </span> {catDetails.hypoallergenic}</p>
                        <p><span>stranger_friendly : </span> {catDetails.stranger_friendly}</p>
                        <p><span>suppressed_tail : </span> {catDetails.suppressed_tail}</p>
                    </>
                }
            </div>

        </>






    );
}

export default CatImage;
