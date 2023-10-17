# Universal app with Expo (Web + Mobile)

## Pre checks

- Use `nvm` to manage Node version(s)
- Run `nvm use` in the project root to set the right Node version
- Run `npm install -g expo-cli` to install the latest Expo cli
- Run `npm install -g eas-cli` to install the latest Expo eas cli

## Local env set up keys

Set up `.env` file following `.env.example` file.

## Running App locally

- Install dependencies `npm ci`
- Run `npm run start` to start app.
  **NOTE** You can also run mobile version using Expo GO, but auth won't work due to security reasons.
