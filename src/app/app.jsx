const {app, autoUpdater, dialog} = require('electron').remote;
import React from 'react';

const server = 'http://localhost:3000';
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;
try {
    autoUpdater.setFeedURL(feed);
} catch (e) {
    console.log('auto update not available');
}

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
        autoUpdater.on('update-downloaded', this.handleInstall);
        autoUpdater.on('error', this.handleDownloadError);
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    handleDownloadError = error => {
        console.log(error);
        this.setState({message: 'error'});
    };

    handleInstall = (event, releaseNotes, releaseName) => {
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application Update',
            message: process.platform === 'win32' ? releaseNotes : releaseName,
            detail:
                'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, response => {
            if (response === 0) autoUpdater.quitAndInstall();
        });
    };

    handleCheckingForUpdate = data => {
        console.log(data);
        this.setState({message: 'Checking For Update'});
    };
    handleUpdateAvailable = data => {
        this.setState({message: 'Update available zzzz'});
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
                Test More Live {app.getVersion()} <div>{this.state.message}</div>
            </div>
        );
    }
}
