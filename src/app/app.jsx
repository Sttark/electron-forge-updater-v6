const {app, autoUpdater} = require('electron').remote;
import React from 'react';

const server = 'https://hazel-server-jmcpkzydxa.now.sh';
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;
console.log(feed);
autoUpdater.setFeedURL(feed);

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            color: this.getRandomColor()
        };
    }

    componentDidMount() {
        autoUpdater.on('checking-for-update', this.handleCheckingForUpdate);
        autoUpdater.on('update-available', this.handleUpdateAvailable);
        autoUpdater.on('update-not-available', this.handleUpdateNotAvailable);
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    handleCheckingForUpdate = data => {
        console.log(data);
        this.setState({message: 'Checking For Update'});
    };
    handleUpdateAvailable = data => {
        console.log(data);
        this.setState({message: 'update available'});
    };
    handleUpdateNotAvailable = data => {
        console.log(data);
        this.setState({message: 'Update NOT available'});
    };

    handleCheckForUpdates = () => {
        this.setState({message: 'Checcckigngingingg.', color: this.getRandomColor()});
        autoUpdater.checkForUpdates();
    };

    render() {
        return (
            <div style={{color: this.state.color}}>
                <button onClick={this.handleCheckForUpdates}>UPDATE</button>
                Test More Hotttttttzzz. {app.getVersion()} <div>{this.state.message}</div>
            </div>
        );
    }
}
