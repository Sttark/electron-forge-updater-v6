### Auto Updating

* Must be signed
* `IDENTITY='LOCAL APPLE DEV ID' GITHUB_TOKEN='PersonalAccess Token' npm run publish`



### Stuff

* Setup the update server
* TOKEN=personal_access_token now -V 1 zeit/hazel

### Updating and Version Bump

* `npm version major | minor | patch` - Bumps version in package.json, tags.
* `git push --tags` - pushes with tags
* `npm run publish` - Remakes the app and publishes to github