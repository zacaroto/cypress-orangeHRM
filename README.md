# Cypress-Framework

A full testing framework based on Cypress.io, including e2e testing, API testing, and Jenkins integration

## 💻 Pre-requisites

Before you use this project you only need to have Node Js installed on your computer.

https://nodejs.org/es/download/
## 💻 Installation
1. Clone repository
2. Install dependencies 

```bash
npm install 
```
## Project Structure 💻

In this section you can find an explanation of the structure of the project and what we have on each folder.
We are going to see some of the main folders one by one.

| Folder/File          | Description                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| cypress/fixtures         | Here you can find the static data stores (like usernames, test data, phone numbers, names, etc)                                              |
| cypress/e2e/ui-testing       | This folder contains all the e2e UI-Testing specs    |
| cypress/e2e/api       | This folder contains all the APi specs |
| cypress/pageobjects/     | This folder contains the implementation where we declare locators and functions we are using in the spec files.                      |
| cypress/support/ | This folder contains the implementation of the actions, assert and other utilities.               |

## 💻 Cypress Execution

Within the following script you will start cypress locally 

```shell script
npm run test
```

Within the following script you will run the UI Testing specs on a specific browser (just change the browser's name: chrome, electron, firefox)

```shell script

npm run e2e:chrome
npm run e2e:firefox
npm run e2e:electron

```
Within the following script you will run the UI Testing specs on all the supported browsers at once

```shell script

npm run e2e:all

```
Within the following script you will run the API Testing specs on Chrome Browser

```shell script

npm run e2e:api

```

you can find all the scripts created on /package.json

## 💻 GitHub Actions

Actions are stored on .github/workflows , to use your own **secrets** variables go to GitHub/Setting/Secrets 
```yaml
Using Secrets Variables

# Get the secret Variable from Github
${{ secrets.NEWMAN_API_KEY }}

```
All the GitHub actions are triggered on **PULL REQUEST** to the main Branch events 
```yaml
name: Workflow Name
on: 
 pull_request:
  branches: [ main ]

```
Feel free to modify the pointing branch and/or the triggering events 
```yaml
name: Workflow Name
on: 
 push:
  branches: [ dev, main ]
```
## Contributor
[Git hub profile](https://github.com/zacaroto)
