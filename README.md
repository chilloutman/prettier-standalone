# prettier-standalone

[![npm](https://img.shields.io/npm/v/prettier-standalone.svg)](https://www.npmjs.com/package/prettier-standalone)

Standalone build of [`prettier`](https://github.com/prettier/prettier/) for use in browsers.

## Why?

Using prettier in create-react-app: [prettier/issues/1269](https://github.com/prettier/prettier/issues/1269)

## Does it Work?

Kind of.

- The bundle is quite big (5.5 MB) because all dependencies are bundled.
- `prettier` has a few large dependencies. E.g. `typescript`, which is not really needed when only formatting JavaScript, but it's bundled anyway.
- `prettier` targets node and future updates could break browser compatibility.
