# Pokeapp

Project about a pokemon list, being able to see the list of pokemons and being able to favorite them.

## Technologies used in the project

- [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)
- [Vite](https://vitejs.dev/)
- [Typescript](https://typescriptlang.org)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)
- [Chakra-UI](https://chakra-ui.com/)

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test or run the project

- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

### Installing and running the project

Clone repository

    https://github.com/ogawaluan/poke-app.git

Go to project repository

    cd poke-app

Install dependencies

    yarn

Run project

    yarn dev

To run unit tests

    yarn test

### To run e2e tests

You will need to have the web server running to perform E2E tests

    yarn dev

Use this command

    yarn cypress

When running this command, a Launchpad will appear, click on E2E testing. After that, choose the browser you prefer (I recommend Chrome) and click start. The chosen browser will open and the tests will appear on the screen, click on the "App.cy.ts" test and run the tests.
