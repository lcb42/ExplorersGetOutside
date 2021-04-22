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
                    <h3>sotoncityexplorers</h3>
                </Container>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>
                    <h4>Welcome to the Southampton City District GetOutside Challenge!</h4>
                    <p>Over the next month, Southampton City District Explorers will work together and attempt to run, walk and cycle the distance [from Lands End to John O'Groats/of the UK mainland coastline].</p>
                    <h4>Key Dates</h4>
                    <p>Start Date, St George's Day, End Date</p>
                </Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>
                    <h4>Itching to get involved? Here's how!</h4>
                    <p>If you're part of Southampton City District Explorers, you should have recieved a special link that will log you in to this website. Once you have used the link on a device, you shouldn't have to log in - or click the link again, simply navigate to this site! The link will only work once, but if you need a second link please reply to the email. Once logged in, you should be able to access the submissions page which is where you'll enter all your distances!</p>
                </Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>
                    <h4>Competition or Challenge?</h4>
                    <p>As well as our overall aim, there will also be several other awards...</p>
                    <ol>
                        <li>The most distance covered by a single Explorer unit.</li>
                        <li>The most distance covered by a single Explorer unit per member.</li>
                        <li>The most distance covered by an individual throughout the challenge.</li>
                        <li>The most distance covered by an individual in one session.</li>
                    </ol>
                    <p>There may be more awards added throughout the challenge, so come back and check later!</p>
                    <p>This website will be updated with the latest stats to show the status of each competition.</p>
                </Paper>
                <Paper className="paper-tile infopage-paper-tile" elevation={3} square>
                    <p>For more information about Southampton City District Explorers, visit our <a href="https://explorers.southamptoncityscouts.org.uk/">website</a>.</p>
                </Paper>
        </div>
        </>  
    )
}