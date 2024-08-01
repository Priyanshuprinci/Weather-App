import React, { useEffect, useState } from 'react';
import './App.css';
const WeatherForm = ({ onSearch, intialLocation}) => {
    const [location, setLocation] = useState(intialLocation)
    const [date, setDate] = useState('');
    useEffect(() => {
        setLocation(intialLocation)
        const today=new Date();
        setDate(today.toISOString().split('T')[0]);
        
    }, [intialLocation])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (location.trim()) {
            onSearch(location);
           
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default WeatherForm
