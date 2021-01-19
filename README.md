## Create Library

1. Run `ng g library {name}`, where `{name}` is name of library.

2. Add components to library and add them to `declarations`, `exports` lists in the Module.

3. Add references for new components/modules to `public-api.ts`.


## Packing library via npm

1. Change name by adding a prefix: `@{organization}\`, where `{organization}` is path to your organization (or user URL). For example, `@romanyanchuk/test-library`.

2. Add description and author for library in `package.json`, like this:
   `"description": "Test library", "author": "Roman Yanchuk"`.

3. Add `npm publish` configuration for library:
   In `package.json` add info about registry.
   `"publishConfig": { "registry": "{registry-path}" }`.
   Where `{registry-path}` is URL path to package registry. For example, `https://npm.pkg.github.com/` if you use a `GitHub Packages`.

4. Add info about `Repository` like this:
   `"repository": { "type": "git", "url": "{path}" }`.
   Where `{path}` is path to repository where you want to publish a package. For example, `git://github.com/RomanYanchuk/packages.git`.
5. Run `ng build {library} --prod`, where `{library}` is name of library. For example `TestLibrary`.

6. Run `npm login --registry={registry_url} --scope=@{organization}`, where `{organization}` is path to organization (or user), where you want to publish. For example, `romanyanchuk`. And {registry_url}`is`package registry`path. For example`https://npm.pkg.github.com`.

7. Run `cd dist/library`, `npm pack`.

8. Run `npm publish`.


## When package updated

Change version of the package if update is needed - `npm version 0.0.0`, where replace 0.0.0 by new version.
Or you can do it manually in `package.json` before build.


## Install package from repository
Run `npm install @{organization}/{package}@{version}`, where `{organization}` is path to organization (or user), where you published, `{package}` is name of package, `{version}` is version of package in format `0.0.0`. 
For example, `npm install @romanyanchuk/test-library@0.0.1`.