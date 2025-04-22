# Intervalia
A web/android app for interactions with the [notion-automation]() #TODO add link to other repo web server.

## Disclaimer
Although there is the capacity to interact with the Notion Database directly, there is not enough incentive as of present to do so since the web server performs tasks for other services that would be required by this service. 

## Description
This is a pomodoro app that uses Notion for its task database as the source of truth.

In addition to being a pomodoro timer, the following features exist:
- Dynamic break bank that counts up as you work (supply a focus time and a break time)
- A flow mode that will continue your work time until you manually turn it bank
  - Works well with the dynamic break back so you take a break proportionate to your focus time
  - Great for meetings which can run over/under time
- Select Notion databases for adding entries to a task completion or pomodoro database

## Installation
**Docker coming soon**

Requires [Node.js](link to Nodejs here)

- Copy/Paste into terminal or execute line by line
``` shell
# Clone repository
git clone https://github.com/PixelFromTheMixery/intervalia
# Navigate to cloned repository
cd intervalia
# install required modules
npm install
```

## Running
`npx expo start -c`
Can also add `--tunnel` as an argument if you wish to connect to your device reliably. 