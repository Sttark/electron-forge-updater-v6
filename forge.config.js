const webpackPlugin = require('./webpack.config');

module.exports = {
    packagerConfig: {
        name: 'Frontierlabel Bacon MakerTest',
        appBundleId: 'com.frontierlabel.ffautotest',
        packageManager: 'npm',
        protocols: [
            {
                name: 'ffautotest',
                schemes: 'ffautotest'
            }
        ]
    },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'electron_forge_updater_v6'
            }
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin']
        },
        {
            name: '@electron-forge/maker-deb',
            config: {}
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {}
        }
    ],
    plugins: [webpackPlugin],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                draft: false,
                repository: {
                    owner: 'mergeweb',
                    name: 'electron-forge-updater-v6'
                }
            }
        }
    ]
};
