import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
const queryString = require('query-string');

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingState: 0,
            videoInformation: {}
        };
    }

    getURLParams() {
        return queryString.parse(this.props.location.search);
    }

    componentWillMount() {
        this.getDownloadLinks();
    }

    componentWillUnmount() {
        this.setState({
            loadingState: 0,
            videoInformation: {}
        });
    }

    getDownloadLinks() {
        let { videoURL } = this.getURLParams();
        let URL = 'https://s1jv2959n8.execute-api.us-east-1.amazonaws.com/v1?q=' + videoURL;
        fetch(URL).then((response) => {
            response.json().then((data) => {
                console.log(data);
                this.setState({
                    videoInformation: data,
                    loadingState: 1,
                })
            });
        });
    }

    renderVideoDetails() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={5} style={{padding: 10}}>
                        <img src={this.state.videoInformation.thumbnail}
                             alt={this.state.videoInformation.title}
                             style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} sm={7} style={{padding: 10}}>
                        <div>
                            <Typography variant="h5" component="h5">
                                {this.state.videoInformation.title}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                {this.renderVideoDownloadSection()}
            </div>
        );
    }

    renderVideoDownloadSection() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Video Quality</TableCell>
                            <TableCell align="right">Video Note</TableCell>
                            <TableCell align="right">Download</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.videoInformation.formats.map((format) => (
                            <TableRow key={format.format_id}>
                                <TableCell component="th" scope="row">
                                    {format.format}
                                </TableCell>
                                <TableCell align="right">{format.format_note}</TableCell>
                                <TableCell align="right">
                                    <a href={format.url} target="_blank" rel="noopener noreferrer"
                                       download={this.state.videoInformation.title + '-' + format.format_note + '.' + format.ext}
                                       style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Button variant="contained"
                                                color="primary">
                                            Download
                                        </Button>
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }

    getCurrentState() {
        return this.state.loadingState;
    }

    render() {
        if (this.getCurrentState() === 0) {
            return (
                <div style={{textAlign: 'center', paddingTop: '20%'}}>
                    <CircularProgress /><br /><br />
                    Fetching video ...
                </div>
            );
        }
        return (
            <div>
                {this.renderVideoDetails()}
            </div>
        );
    }
}

export default Search;