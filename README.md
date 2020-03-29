# WG-FE-BROKER-PORTAL

> A React based Front-end platform containing a few broker tools.

## Table of Contents

- [About](#about)
- [Development](#development)
  - [Adding a dependency](#adding-a-dependency)
  - [Code style and CI](#code-style-and-ci)
- [Testing](#testing)
  - [Running tests automatically](#running-tests-automatically)
- [Built Using](#built-using)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About

An React based Front-end platform containing a design system.

## Development

in the root of the project run:

1.  Install packages

```sh
$ npm i
```

2.  run storybook.

```sh
$ npm run storybook
```

## contributing

### pull-request

The project uses 2 main braches, master and dev. To contribute please open an pull-request from you current branch **feature/** or **bug/** to dev.

### Adding a dependency

When you want to use an additional package, you need to install it via npm install <package> or npm install <package> --dev (if its an development dependency)

### Code style and CI

#### Eslint

We use Eslint to lint syntax and code logic errors

We use:

- [Eslint recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
- [React recommended](https://github.com/yannickcr/eslint-plugin-react/)
- [Prettier recommended](https://github.com/prettier/eslint-plugin-prettier)

#### Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Testing

### Running tests automatically

This project makes usage of [jest](https://github.com/facebook/jest) and [enzyme](https://github.com/airbnb/enzyme) which automatically creates a virtual environment and launches all the unit tests.

Run from the root of the repository

```sh
$ npm run test:watch
```

## Built Using

- [React](https://github.com/facebook/react/) - JavaScript library for building user interfaces
- [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age.
- [storybook](https://github.com/storybookjs/storybook) - UI component dev & test: React, Vue, Angular, React Native, Ember, Web Components & more!
