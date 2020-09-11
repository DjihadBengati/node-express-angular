# Node-Express-Angular starter pack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Deploy to Heroku

You can deploy the application to Heroku with a single click:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/DjihadBengati/node-express-angular)

## MongoDB 

A [MongoDB](https://docs.mongodb.com/manual/tutorial/) database is required (running on `mongodb://localhost:27017/app`).
The app will use a schema with name `app` and a collection with name `products`.

## Development server

First run `npm install`.

Run `npm start` for a Express server. Navigate to `http://localhost:8080/api/status`. The result will be `{"status":"UP"}`.

Run `ng serve --proxy-config proxy.config.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
