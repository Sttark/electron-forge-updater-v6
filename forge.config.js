module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'mergeweb',
                    name: 'electron-forge-updater-v6'
                }
            }
        }
    ]
};
