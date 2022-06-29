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
