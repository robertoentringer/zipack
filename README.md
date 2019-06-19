# Zipack

A npm package to create a zip file from a chrome extension resource folder.

Author: [Roberto Entringer](https://robertoentringer.com)  
License: MIT  
Npm package: https://www.npmjs.com/package/zipack  
Github: https://github.com/robertoentringer/zipack#readme

## Installation

```shell
$ npm install zipack
```

## Usage

Call script from the **package.json**:

```json
"scripts": {
  "pack":  "zipack src/manifest.json"
}
```

Call script from the **terminal**:

```shell
$ npx zipack src/manifest.json
```

## Example

**src/manifest.json**

```json
{
  "name": "Getting Started Example",
  "version": "1.0",
  "description": "Build an Extension!",
  "manifest_version": 2
}
```

```shell
$ npx zipack src/manifest.json
```

> Create a zip file named **"Getting Started Example v.1.0.zip"** from all content of the **src/** directory.
