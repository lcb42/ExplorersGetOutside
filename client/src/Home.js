import React from 'react';

import { Container, Grid, Paper } from '@material-ui/core';

import './App.css';
import './Home.css';

import CustomMenu from './Components/CustomMenu.js'
import Map from './Components/Map.js'

export default function Home() {

    return (
        <>
        <Map/>
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