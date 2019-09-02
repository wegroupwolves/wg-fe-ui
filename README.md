# WG-FE-BROKER-PORTAL

> An React based Front-end platform containing a few broker tools. 

## Table of Contents

<!-- vim-markdown-toc GFM -->

* [About](#about)
    * [API documentation](#api-documentation)
* [Development](#development)
    * [Adding a dependency](#adding-a-dependency)
    * [Code style and CI](#code-style-and-ci)
* [Deployment](#deployment)
    * [Versioning](#versioning)
* [Testing](#testing)
    * [Running tests automatically](#running-tests-automatically)
* [Built Using](#built-using)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

<!-- vim-markdown-toc -->

## About

An React based Front-end platform containing a design system.

## Development

We advice you to use [yarn](https://yarnpkg.com/en/docs/install)

in the root of the project run:

1.  Install packages

```sh
$ yarn
```

2.  run project.

```sh
$ yarn dev
```

### Adding a dependency

When you want to use an additional package, you need to install it via yarn add <package> or yarn add <package> --dev (if its an development dependency)

### Code style and CI

#### Eslint
We use Eslint to lint syntax and code logic errors

We use:

-   [Eslint recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
-   [React recommended](https://github.com/yannickcr/eslint-plugin-react/)
-   [Prettier recommended](https://github.com/prettier/eslint-plugin-prettier)

#### Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. 


## Deployment

When developing a feature you should always create a feature/<feature-name> branch! When your feature is done you can create an pull-request into the release/<release-version> where the CI system will be triggered and tests will run.
If all tests pass you can merge it to _dev_.
When it is time to release the build that is created at the end of the staging CI build will be copied to production ea _master_ branch.

### Versioning

> [versioneer](https://github.com/warner/python-versioneer) is installed for version string management, so no updating the version of the module.

A version tag exists out of _X.X.X.X_ where we have MAJOR.MINOR.PATCH.BUILD

    where BUILD => SEMVER = 3 # QA
    where PATCH => SEMVER = 2 # STAGE
    where MINOR => SEMVER = 1 # THIS SHOULD NEVER BE USED IN AUTO BUILDING
    where MAJOR => SEMVER = 0 # THIS SHOULD NEVER BE USED IN AUTO BUILDING

So when pushing to staging the build number gets incremented, when pushing to staging the PATCH number gets incremented.
If there is a successfull release ready to ship, it should be tagged with the minor number by hand.
When creating a minor or major release there should be a description explaining all the changes, and should be writting in HISTORY.md, if it is not there create it.

## Testing

### Running tests automatically

This project makes usage of [jest](https://github.com/facebook/jest) and [enzyme](https://github.com/airbnb/enzyme) which automatically creates a virtual environment and launches all the unit tests.

Run from the root of the repository

```sh
$ yarn test:watch
```

## Built Using

-   [React](https://github.com/facebook/react/) - JavaScript library for building user interfaces
-   [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends
-   [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age.
-   [i18next](https://github.com/i18next/i18nexthttps://github.com/styled-components/styled-components) -  Internationalization-framework written in and for JavaScript.

## Authors

-   [@aaronisrael](https://bitbucket.org/aaronisrael) - Initial work & Major development
-   [@maximeverhoeve](https://bitbucket.org/maximeverhoeve) - Major development
-   [@sam_amant](https://bitbucket.org/sam_amant) - Major development

## Acknowledgements