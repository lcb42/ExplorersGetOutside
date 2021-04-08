import React from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';

export default function CustomMenu(){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button className="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Mn</Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Submit An Entry</MenuItem>
                <MenuItem onClick={handleClose}>More Information</MenuItem>
            </Menu>
        </>
    )
}

