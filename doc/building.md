# Building Tad from Sources

## Pre-requisites: Node, Npm and Lerna

To build Tad, you should have [node](https://nodejs.org/en/) and `npm`(https://www.npmjs.com/get-npm) (included when you install Node.js) installed. The versions of these tools used for development are:

```bash
$ node --version
v19.3.0
$ npm --version
9.2.0
```

Once you have Node installed, run `npm install` at the top level:

```bash
$ npm install
```

## Installing dependencies

The project uses npm workspaces and Lerna for package management. To install all dependencies, simply run:

```bash
$ npm install
```

This will install all dependencies and link local packages together. npm workspaces automatically handles package hoisting and local package linking.

## Building Everything

To build all packages, run:

```bash
$ npm run build
```

The build process will handle all packages in the correct order. If you need to build a specific package, you can cd into its directory and run `npm run build`.

## Trying the Desktop app

```bash
$ cd packages/tad-app
$ npm start -- csv/movie_metadata.csv
```

If all went well, the Tad app should start with a view of `csv/movie_metadata.csv`

## Iterating during UI Development: Desktop App

When iterating on the UI during development, I recommend keeping a couple of windows open:

- In `packages\tadviewer`, run `npm run watch`
- In `packages\tad-app`, run `npm run watch`

Note that you'll still have to run `npm run build` if you make changes in any of the core library packages (`reltab`, `reltab-duckdb`, `aggtree`).

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
