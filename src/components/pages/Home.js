import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: ''
        };
    }

    handleSearchValueChange(e) {
        this.setState({
            videoURL: e.target.value,
        })
    }

    getDownloadLinks() {
        this.props.history.push('/search?videoURL=' + this.state.videoURL)
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <Icon style={{fontSize: 200, color: '#283593', paddingTop: '5%'}}>cloud_download</Icon>
                </div>
                <div>
                    <Typography variant="h3" component="h3" style={{color: '#283593'}}>
                        ngDownloader
                    </Typography>
                </div>
                <div>
                    <TextField id="video-url"
                               label=""
                               placeholder="Example: https://www.youtube.com/watch?v=J1uxBvrPCig"
                               margin="normal"
                               style={{width: '80%', maxWidth: 700}}
                               onChange={(e) => this.handleSearchValueChange(e)}/>
                </div>
                <div>
                    <Button variant="contained"
                            color="primary"
                            style={{margin: 5}}
                            onClick={() => this.getDownloadLinks()}>
                        Get Download Links
                    </Button>
                    <a target="_blank" rel="noopener noreferrer" href="https://manishbisht.github.io" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button variant="contained" style={{margin: 5}}>About Developer</Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;