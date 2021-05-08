import React from 'react';

import axios from 'axios';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper, FormControl, InputLabel, Select, MenuItem, FormHelperText, Input, InputAdornment, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SendIcon from '@material-ui/icons/Send';

import { MapContainer, TileLayer } from 'react-leaflet'

import './App.css';
import './SubmitPage.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    button: {
        margin: theme.spacing(1),
    }
  }));

export default function SubmitPage() {
    const position = [55, 1]

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-04-23T12:00:00'));
    const [activityType, setActivityType] = React.useState('');
    const [distance, setDistance] = React.useState(0);
    const [userCode, setUserCode] = React.useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleActivityTypeChange = (event) => {
        setActivityType(event.target.value);
    };

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }

    const handleUserCodeChange = (event) => {
        setUserCode(event.target.value);
    }

    const sendData = () => {
        console.log("Print a nice message")
        // Call server api route to submit an entry
        // This will use a cookie to identify the participant
        axios.post('/submit', {
            user_code: userCode, // get cookie value and pass it here
            distance: distance,
            activity: activityType,
            date_completed: selectedDate
        }).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <>
        <MapContainer center={position} zoom={6} scrollWheelZoom={false} id="mapid">
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
        </MapContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="submitpage-contents contents">
            <Container className="submitpage-title-container">
                <h1>Submit an Entry</h1>
            </Container>
            <Paper className="paper-tile submitpage-paper-tile" elevation={3} square>
                <p>How far did you go?</p>
                <FormControl className={ classes.formControl }>
                    <Input
                        id="standard-adornment-weight"
                        type="number"
                        value={distance}
                        onChange={handleDistanceChange}
                        endAdornment={<InputAdornment position="end">km</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        'aria-label': 'Distance - how far you went.',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Distance - how far you went</FormHelperText>
                </FormControl>
                <br/><br/>
                <p>What did you do?</p>                
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Activity Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={activityType}
                    onChange={handleActivityTypeChange}
                    >
                    <MenuItem value={"w"}>Walking</MenuItem>
                    <MenuItem value={"r"}>Running</MenuItem>
                    <MenuItem value={"c"}>Cycling</MenuItem>
                    <MenuItem value={"s"}>Swimming</MenuItem>
                    </Select>
                    <FormHelperText>This is how you achieved your distance.</FormHelperText>
                </FormControl>
                <br/><br/>
                <p>When did you do it?</p>
                <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Enter the date "
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                <br/><br/>
                <p>What's your user code?</p>
                <FormControl className={ classes.formControl }>
                    <Input
                        id="standard-adornment-weight"
                        value={userCode}
                        onChange={handleUserCodeChange}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        'aria-label': 'Your user code',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Your user code</FormHelperText>
                </FormControl>
                <br/><br/><br/><br/>
                <Button 
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                    onClick={() => sendData()}
                >
                    Send
                </Button>
            </Paper>
        </div>
        </MuiPickersUtilsProvider>
        </>
    )
}