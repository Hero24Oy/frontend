# Frontend

## How to start developing

### 1. Install dependencies

_Run it in the root:_

```bash
npm install
```

### 2. Watch packages

_We should start watching packages during development, so run it in the root:_

```bash
npm run dev
```

### 3. Environments:

To manage environment variables and configuration settings, follow these steps:

.env file: store your environment variables in a .env file. This file will contain sensitive and environment-specific information.

Ensure that the .env and google-play-services.json files are placed in their appropriate folders:

- apps/customer
- apps/hero

### 4. Watch app

_Use the following scripts from the apps/\*\*/ directories_

```bash
npm run ios

# or

npm run android
```

## Project structure:

```
frontend
├── config/                         # The application configuration
├── docker/                         # Database dumps, dockerfiles, etc
├── apps/                           # Applications
│   ├── customer/*                  # Customer app
│   └── hero/*                      # Hero app
│       └── src/*                   # Main course code
│           ├── app/*               # App navigation
│           ├── configs/*           # App configuration
│           ├── modules/*           # App modules
│           ├── .env                # Environment variables
│           ├── .eslintrc.js        # Eslint rules
│           ├── .prettierc.js       # Prettier rules
│           ├── app.json            # Expo app configuration
│           ├── env.d.ts            # Types for envs
│           ├── android             # Bare android code
│           ├── ios                 # Bare ios code
│           ├── assets              # Static files for projects
│           ├── .easignore          # The files here will be ignored during deploy to the EAS
│           ├── .nvmrc              # For nodejs version control
│           ├── babel.config.js     # Babel config
│           ├── metro.config.js     # Metro config
│           ├── tsconfig.json       # Lint config
│           ├── cspell.config.js    # Exceptions for words
│           └── .env.example        # List of required environments
│
├── packages                        # Application packages
│   ├── common/*                    # Core, types and modules used in both the hero and customer apps
│   │   └── src/*                   # Common modules
│   │       ├── modules/*           # Common modules
│   │       ├── core/*              # Common features
│   │       └── types/*             # Common types
│   ├── ui/*                        # UI library for all base components used in both apps
│   └── configs/*                   # Base eslint, prettier, typescript configuration files
│       ├── .eslintrc.js            # Eslint rules
│       ├── .prettierc.js           # Prettier rules
│       └── tsconfig.json           # Lint config
├── .nvmrc                          # For nodejs version control
├── .npmrc                          # For npm version control
├── .github                         # Github actions and templates
├── .husky                          # Git hooks
└── turbo.json                      # Turborepo pipeline config
```
