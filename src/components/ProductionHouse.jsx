import React from 'react'

import disneyVideo from '../assets/videos/disney.mp4'
import marvelVideo from '../assets/videos/marvel.mp4'
import natGeoVideo from '../assets/videos/national-geographic.mp4'
import pixarVideo from '../assets/videos/pixar.mp4'
import starWarsVideo from '../assets/videos/star-wars.mp4'

import logo from '../assets/images/logo.png'
import marvelLogo from '../assets/images/marvel.png'
import nationalGLogo from '../assets/images/nationalG.png'
import pixarLogo from '../assets/images/pixar.png'
import starwarsLogo from '../assets/images/starwar.png'
import heroImage from '../assets/images/ad3bf027-e85b-4cad-ab5f-80a25e37f4cb.jpg'

function ProductionHouse() {
    const productionHouseList = [
        { id: 1, image: logo, video: disneyVideo, alt: 'Disney' },
        { id: 2, image: pixarLogo, video: pixarVideo, alt: 'Pixar' },
        { id: 3, image: marvelLogo, video: marvelVideo, alt: 'Marvel' },
        { id: 4, image: starwarsLogo, video: starWarsVideo, alt: 'Star Wars' },
        { id: 5, image: nationalGLogo, video: natGeoVideo, alt: 'National Geographic' },
    ]

    return (
        <div className='flex gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item) => (
        <div key={item.id} className="prod-item relative group border-[2px] border-gray-600 rounded-lg overflow-hidden shadow-xl shadow-black ">
        
        <img src={item.image} alt={item.alt} className="w-full block" />
        
        <video src={item.video} autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover rounded-md z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none'/>
        </div>
    ))}
    </div>
    )
}

export default ProductionHouse
