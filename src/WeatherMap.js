import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './App.css';
import customIconUrl from './icon.png';
const customIcon=L.icon({
    iconUrl:customIconUrl,
    iconSize:[32,32],
    iconAnchor:[16,32],
    popupAnchor:[0,-32]
});
const WeatherMap = ({ weatherData, onMapClick }) => {
    if (!weatherData) {
        return <p>Loading map...</p>
    }
    const LocationMarker = () => {
        useMapEvents({
            click: (event) => {
                const { lat, lng } = event.latlng;
                onMapClick(lat, lng);
                
            }
        })
        return null;
    }
    // const { coord, name, weather, main } = weatherData;
    return (
        <MapContainer center={[weatherData.coord.lat,weatherData.coord.lon]} zoom={10} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {weatherData && (
                <Marker position={[weatherData.coord.lat, weatherData.coord.lon]} icon={customIcon}>
                    <Popup>

                        <strong>{weatherData.name}</strong><br />
                        Temperature:{(weatherData.main.temp - 273.15).toFixed(2)}°C<br />
                        Weather:{weatherData.weather[0].description}
                    </Popup>
                </Marker>
            )}
            <LocationMarker />
        </MapContainer>
    )
}

export default WeatherMap

