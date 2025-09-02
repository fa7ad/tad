# Building Tad from Sources

## Pre-requisites: Node and Yarn

To build Tad, you should have [node](https://nodejs.org/en/) and `yarn`(https://yarnpkg.com/en/docs/install) installed (just enable corepack). The versions of these tools used for development are:

```bash
$ node --version
v22.17.1
$ yarn --version
4.9.4
```

Once you have Node and Yarn installed, run `yarn install` at the top level:

```bash
$ yarn install
```

## Installing dependencies

The project uses Yarn Workspaces for package management. To install all dependencies, simply run:

```bash
$ yarn install
```

This will install all dependencies and link local packages together. Yarn Workspaces automatically handles package hoisting and local package linking.

## Building Everything

To build all packages, run:

```bash
$ yarn build
```

The build process will handle all packages in the correct order. If you need to build a specific package, you can run `yarn workspace <package-name> build`.

## Running the Desktop app

## Trying the Desktop app

```bash
$ cd packages/tad-app
$ yarn start -- csv/movie_metadata.csv
```

If all went well, the Tad app should start with a view of `csv/movie_metadata.csv`

## Iterating during UI Development: Desktop App

When iterating on the UI during development, I recommend keeping a couple of windows open:

- In `packages\tadviewer`, run `yarn watch`
- In `packages\tad-app`, run `yarn watch`

Note that you'll still have to run `yarn build` if you make changes in any of the core library packages (`reltab`, `reltab-duckdb`, `aggtree`).

# Additional Info

## Project Structure

The project consists of these main packages:

- `reltab`: Core query abstraction layer
- `reltab-duckdb`: DuckDB database driver
- `aggtree`: Library for pivot tree construction
- `tadviewer`: The core UI component
- `tad-app`: The desktop application

## Useful paths:

Log information (from [electron-log](https://www.npmjs.com/package/electron-log)):

- on Linux: ~/.config/Tad/main.log
- on OS X: ~/Library/Logs/Tad/main.log
- on Windows: %USERPROFILE%\AppData\Roaming\Tad\main.log
