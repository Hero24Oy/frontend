# Frontend

## How to start developing

### 1. Install dependencies

_Run it in the root:_

```bash
yarn
```

### 2. Watch packages

This command watches changes in packages and automatically updates them in the apps.

_We should start watching packages during development, so run it in the root:_

```bash
yarn ios

# or

yarn android
```

### 3. Environments:

To manage environment variables and configuration settings, follow these steps:

.env file: store your environment variables in a .env file. This file will contain sensitive and environment-specific information.

Ensure that the .env and google-play-services.json files are placed in their appropriate folders:

- apps/customer
- apps/hero

### 4. Start app

_Use the following scripts from the apps/\*\*/ directories_

```bash
yarn ios

# or

yarn android
```

## Project structure:

```
frontend
├── config/ # The application configuration
├── docker/ # Database dumps, dockerfiles, etc
├── apps/ # Applications
│ ├── customer/_ # Customer app
│ └── hero/_ # Hero app
│ └── src/_ # Main course code
│ ├── app/_ # App navigation
│ ├── configs/_ # App configuration
│ ├── modules/_ # App modules
│ ├── .env # Environment variables
│ ├── .eslintrc.js # Eslint rules
│ ├── .prettierc.js # Prettier rules
│ ├── app.json # Expo app configuration
│ ├── env.d.ts # Types for envs
│ ├── android # Bare android code
│ ├── ios # Bare ios code
│ ├── assets # Static files for projects
│ ├── .easignore # The files here will be ignored during deploy to the EAS
│ ├── .nvmrc # For nodejs version control
│ ├── babel.config.js # Babel config
│ ├── metro.config.js # Metro config
│ ├── tsconfig.json # Lint config
│ ├── cspell.config.js # Exceptions for words
│ └── .env.example # List of required environments
│
├── packages # Application packages
│ ├── common/_ # Core, types and modules used in both the hero and customer apps
│ │ └── src/_ # Common modules
│ │ ├── modules/_ # Common modules
│ │ ├── core/_ # Common features
│ │ └── types/_ # Common types
│ ├── ui/_ # UI library for all base components used in both apps
│ └── configs/\* # Base eslint, prettier, typescript configuration files
│ ├── .eslintrc.js # Eslint rules
│ ├── .prettierc.js # Prettier rules
│ └── tsconfig.json # Lint config
├── .nvmrc # For nodejs version control
├── .npmrc # For npm version control
├── .github # Github actions and templates
├── .husky # Git hooks
└── turbo.json # Turborepo pipeline config

```
