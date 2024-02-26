import React, { useEffect, useState } from 'react';
import { fetchNumber } from '../../../TestServices/NumberService';
import './CardAvailableServices.css';

const CardAvailableServices = () => {
    const [number, setNumber] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchNumber();
                setNumber(result);
            } catch (error) {
                console.error('Error fetching number:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='CardAvailableServices'>
            <h2 className='heading'>{number}</h2>
            <h3 className='heading2'>Lorem Ipsum</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    );
};
export default CardAvailableServices;