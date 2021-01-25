## Create Library

1. Run `ng g library {name}`, where `{name}` is name of library.

2. Add components to library and add them to `declarations`, `exports` lists in the Module.

3. Add references for new components/modules to `public-api.ts`.


## Creating Package Registry and Login

1. Run `npm install -g verdaccio`

2. Run `docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio`

3. Run `npm adduser --registry {registry}` - where `{registry}` is registry path (`http://localhost:4873` for example).
Then add username/password/email.


## Packing library and publishing to Verdaccio
1. Add description and author for library in `package.json`, like this:
   `"description": "Test library", "author": "Roman Yanchuk"`.

2. Add `npm publish` configuration for library:
   In `package.json` add info about registry.
   `{ "publishConfig": { "registry": "{registry}" } }`,
   where `{registry}` is registry path (`http://localhost:4873` for example).

3. Run `ng build {library} --prod`, where `{library}` is name of library. For example `TestLibrary`.

4. Run `cd dist/{library}`, `npm pack`.

5. Run `npm publish`.

## When package updated

Change version of the package if update is needed - `npm version 0.0.0`, where replace 0.0.0 by new version.
Or you can do it manually in `package.json` before build.

## Install package from repository

Run `npm install {package} --{registry}`, `{package}` is name of package, `{registry}` is registry path (`http://localhost:4873` for example).
For example, `npm install test-library.
