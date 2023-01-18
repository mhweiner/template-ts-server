# template-ts-server

Blank Typescript Express project

## Running on local
```shell
npm i
npm run dev
```

## Rebuilding configuration type file

If you make any changes to the default configuration, you must rebuild the type file with `npm i`. See [lambdaconf](https://www.npmjs.com/package/lambdaconf) for more info.

## Running tests

```shell
npm test
```

## Making commits

This repo uses [semantic-release](#https://github.com/semantic-release/semantic-release) and [conventional-commits](#https://www.conventionalcommits.org/en/v1.0.0/).

Here are the supported commit types and their effect:

|commit type|new version|
|-----------|-----------|
|[breaking change]|major|
|feat|minor|
|chore|minor|
|fix|patch|
|docs|patch|
|refactor|patch|
|style|patch|
|test|patch|
|build|no release|
|ci|no release|

## Deploying to production

Every commit made to `main` that passes CI is deployed to production via Github Actions.
