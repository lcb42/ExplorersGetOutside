import React from 'react';

import { Container, Grid, Paper } from '@material-ui/core';

import { MapContainer, TileLayer } from 'react-leaflet'

import './App.css';
import './Home.css';

import CustomMenu from './Components/CustomMenu.js'

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
        <div className="home-contents contents">
                <Container className="home-title-container">
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>GetOutside!</h1>
                            <h3>sotoncityexplorers</h3>
                        </Grid>
                        <Grid item xs={3}>
                            <CustomMenu/>
                        </Grid>
                    </Grid>
                </Container>
                <Paper className="paper-tile" elevation={3} square>
                    <p>We are currently X km through our route! That's X%</p>
                </Paper>
                <Paper className="paper-tile" elevation={3} square>
                    <h4>Leaderboards</h4>
                    <p>Top Unit: X</p>
                    <p>Top Individual: X</p>
                    <p>See more...</p>
                </Paper>
                <Paper className="paper-tile" elevation={3} square>Submit an Entry</Paper>
        </div>
        </>  
    )
}