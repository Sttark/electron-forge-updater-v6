const {app, autoUpdater} = require('electron').remote;
import React from 'react';

const server = 'https://hazel-server-jmcpkzydxa.now.sh/';
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        autoUpdater.on('checking-for-update', this.handleCheckingForUpdate);
        autoUpdater.on('update-available', this.handleUpdateAvailable);
        autoUpdater.on('update-not-available', this.handleUpdateNotAvailable);
    }

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
        console.log('check forrest updates');
        autoUpdater.checkForUpdates();
    };

    render() {
        return (
            <div>
                <button onClick={this.handleCheckForUpdates}>UPDATE</button>
                Test More Hotttttttzzz. {app.getVersion()} <div>{this.state.message}</div>
            </div>
        );
    }
}
