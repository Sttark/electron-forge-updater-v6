const webpackPlugin = require('./forge.webpack');
const process = require('process');

module.exports = {
    packagerConfig: {
        name: 'Frontierlabel Bacon MakerTest',
        osxSign: {
            identity: process.env.IDENTITY
        },
        appBundleId: 'com.frontierlabel.ffautotest',
        packageManager: 'npm',
        protocols: [
            {
                name: 'ffautotest',
                schemes: 'ffautotest'
            }
        ],
        ignore: ['/test', '/vendor', 'composer.json', 'composer.lock', 'src', 'out']
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
