# Sales to receive Reminder

[![Build](https://github.com/GSaiki26/sales-to-receive-reminder/actions/workflows/build.yaml/badge.svg)](https://github.com/GSaiki26/sales-to-receive-reminder/actions/workflows/build.yaml) [![Code quality](https://github.com/GSaiki26/sales-to-receive-reminder/actions/workflows/code%20quality.yaml/badge.svg)](https://github.com/GSaiki26/sales-to-receive-reminder/actions/workflows/code%20quality.yaml)

    The`sales to receive Reminder` is a automation to send some email about the closests sales to receive that'll expire soon or already is expired.
It's a NodeJS project with Selenium Webdriver.

## Build

    To build the project, you can directly run on your own machine or use Docker to run.`<br>`
Don't forget to add the `app.env.example` file to your environment.

## Environment variables

    In order to run the project, you need to define the environment variables that are define in the`app.env.example`.

    Here's a table to describe all the variables:

| Name                      | Description                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CONTAAZUL_CREDENTIAL_MAIL | The account's email to be logged in.                                                                                                                                                |
| CONTAAZUL_CREDENTIAL_PASS | The account's pass to be logged in.                                                                                                                                                 |
| CONTAAZUL_LOGIN           | The default value is: "https://login.contaazul.com/". It's the default uri to go to the login page.                                                                                 |
| NODE_ENV                  | The variable to define the environment from the project. Checkout [this](https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/) to learn more about. |
|                           |                                                                                                                                                                                     |

# Running
    You can simply run the project in your machine, or run in a container.
    To run in a container with Docker just run:

```sh
    docker build -t sales-to-receive-reminder .;
    docker run --name sales-reminder --env-file ./app.env sales-to-receive-reminder;
```

    Or just run in you machine (don\'t forget to add the environments to youy terminal, or add dotenv to the project and configure it.):
```sh
    yarn install --production
    yarn run start:prod
```
