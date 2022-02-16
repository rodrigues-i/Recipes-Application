import React from 'react';
import ChiefCard from './ChiefCard';

interface objecto {
    name: string;
    img: string;
    recipesCount: string;
    cuisine: string;
}

function ChiefsSection() {
    const chiefs: Array<objecto> = [
        {
            name: 'Juan Carlos',
            img: 'src/img/top-chiefs/img_1.jpg',
            recipesCount: '10',
            cuisine: 'Mexican',
        },
        {
            name: 'John Doe',
            img: 'src/img/top-chiefs/img_2.jpg',
            recipesCount: '05',
            cuisine: 'Japanese',
        },
        {
            name: 'Erich Maria',
            img: 'src/img/top-chiefs/img_3.jpg',
            recipesCount: '13',
            cuisine: 'Italian',
        },
        {
            name: 'Chris Brown',
            img: 'src/img/top-chiefs/img_4.jpg',
            recipesCount: '08',
            cuisine: 'American',
        },
        {
            name: 'Blake Lively',
            img: 'src/img/top-chiefs/img_5.jpg',
            recipesCount: '09',
            cuisine: 'French',
        },
        {
            name: 'Ben Affleck',
            img: 'src/img/top-chiefs/img_6.jpg',
            recipesCount: '04',
            cuisine: 'Indian',
        },
    ];

    return (
        <div className='section chiefs'>
            <h1 className='title'>Our Top Chiefs</h1>
            <div className='top-chiefs-container'>
                {chiefs.map((chief) => (
                    <ChiefCard key={chief.name} chief={chief} />
                ))}
            </div>
        </div>
    );
}

export default ChiefsSection;
