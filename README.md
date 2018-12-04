### Auto Updating

* Must be signed
* `npm version patch`
* `git push --tags && git push`
* `IDENTITY='LOCAL APPLE DEV ID' GITHUB_TOKEN='PersonalAccess Token' npm run publish`

### Stuff

* Setup the update server
* TOKEN=personal_access_token now -V 1 zeit/hazel
* https://github.com/zeit/hazel

### Updating and Version Bump

* `npm version major | minor | patch` - Bumps version in package.json, tags.
* `git push --tags` - pushes with tags
* `npm run publish` - Remakes the app and publishes to github

### Docs

* https://v6.electronforge.io/configuration
* https://v6.electronforge.io/auto-update



Webpack has a main config and a renderer config
* https://v6.electronforge.io/plugins/webpack
* https://js.electronforge.io/plugin/webpack/interfaces/webpackpluginconfig