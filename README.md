# Frontend

## How to start developing

### 1. Install dependencies

_Run it in the root:_

```
npm install
```

### 2. Watch packages

_We should start watching packages during development, so run it in the root:_

```
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
