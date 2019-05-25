import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon/Icon';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <Icon>cloud_download</Icon>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        <Link to={'/'}>ngDownloader</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;