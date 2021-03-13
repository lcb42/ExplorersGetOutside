import React from 'react';

import { Grid } from '@material-ui/core';

import { MapContainer, TileLayer } from 'react-leaflet'

import './App.css';

export default function Home() {
    const position = [55, 1]
    return (
        <>
        <MapContainer center={position} zoom={6} scrollWheelZoom={false} id="mapid">
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
        </MapContainer>
        <Grid container className="page-container">
            <Grid item xs={12} md={3} className="data-container">
                <p>Data</p>
            </Grid>
        </Grid> 
        </>  
    )
}