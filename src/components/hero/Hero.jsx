import React from 'react';
import { useState } from 'react';

const Hero = () => {
    const [image, setImage] = useState('working-woman.png');
    return (
        <section className='hero'>
            <article className='hero__content'>
                <h1>Développeuse web - Elodie Bénard</h1>
                <blockquote>
                    <p>
                    “ Les détails ne sont pas des détails, ils font la conception d'un produit. ” 
                    </p>
                    <p className='blockquote__author'>Charles Eames</p>
                </blockquote>
                
                <p>Création de sites web dynamiques et optimisés selon vos besoins.</p>
            </article>
            <div className='hero__picture'>
                <img src={image} alt="dessin d'une femme avec un ordinateur" />
            </div>

        </section>
    );
};

export default Hero;