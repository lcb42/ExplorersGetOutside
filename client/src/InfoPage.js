import React from 'react';

import { Container, Paper } from '@material-ui/core';

import { MapContainer, TileLayer } from 'react-leaflet'

import './App.css';
import './InfoPage.css';

export default function InfoPage() {
    const position = [55, 1]
    return (
        <>
        <MapContainer center={position} zoom={6} scrollWheelZoom={false} id="mapid">
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
        </MapContainer>
        <div className="infopage-contents contents">
                <Container className="infopage-title-container">
                    <h1>GetOutside!</h1>
                    <h4>sotoncityexplorers</h4>
                </Container>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>Boop</Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>Stuff</Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>Other stuff</Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>More stuff</Paper>
        </div>
        </>  
    )
}