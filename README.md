# Frontend

## How to start developing

1. `npm run install-all`
   2.1. `npm run watch:all`
   2.2. Or reopen VScode(`cmd+shift+p` -> `Reload window`) to start [tasks](#vscode)

## Start app-hero

- `cd app-hero`
- `npm start`

## Start app-customer

- `cd app-customer`
- `npm start`

## How work with this repo

### Install order

This repository has very strong dependencies between configs, so if you decide to install dependencies manually rather than using `npm run install-all`, you need to do it in this order:

1. Install root dependencies
2. Install hero24-common dependencies
3. Install ui-library dependencies
4. Install others

### Development process

#### VScode

After installing all the dependencies using `npm run install-all`, VScode watcher hooks will be automatically enabled when you open the folder. They monitor changes in the `hero24-common` and `ui-library` folders and automatically copy them to the node modules of other repositories.

#### Other IDE

After any change in `hero24-common` and `ui-library` , in order for them to appear in other repositories in them, you need to manually call the command `npm run update-dependency-on-this` or `npm run update-local-dependencies` in the repository you need.

### How install lib

If you need to install a library in `hero24-common` or `ui-library`, then in them you install them as dev-dependencies, and then in `app-hero` and `app-customer` as dependencies.

### How work pre-push

When you execute a push command, it can take quite a long period of time due to the fact that the script goes through each folder and causes linting there.

### Path aliases in hero24-common and ui-library

Unfortunately, aliases are not available in these repositories. If you have any ideas on how this can be done, please suggest.
