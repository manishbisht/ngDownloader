import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div align="center">
                <Icon style={{fontSize: 200, color: '#3f51b5', paddingTop: '5%'}}>cloud_download</Icon>
                <Typography variant="display2" color="inherit">
                    ngDownloader
                </Typography>
                <Typography variant="subheading" color="inherit">
                    Download videos from YouTube.com and a few more websites
                </Typography>
                <TextField
                    id="with-placeholder"
                    label=""
                    placeholder="Example: https://www.youtube.com/watch?v=J1uxBvrPCig"
                    margin="normal"
                    style={{width: '80%', maxWidth: 700}}
                />
                <div>
                    <Button variant="contained" color="primary" style={{margin: 5}}>
                        Get Download Links
                    </Button>
                    <a target="_blank" rel="noopener noreferrer" href="https://manishbisht.me" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button variant="contained" style={{margin: 5}}>About Developer</Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;