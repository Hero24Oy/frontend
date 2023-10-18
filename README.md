# Frontend

## 1. Install dependencies

```bash
npm install
```

## 2. Watch packages

```bash
npm run dev
```

## 3. Watch app

_Hero (seller) app_

```bash
npm run dev:hero
```

_Customer (buyer) app_

```bash
npm run dev:customer
```

## How work with this repo

### Install order

This repository has very strong dependencies between configs, so if you decide to install dependencies manually rather than using `npm run install:all`, you need to do it in this order:

1. Install root dependencies
2. Install hero24-common dependencies
3. Install ui-library dependencies
4. Install others

### Development process

### Path aliases in common and ui

To create an alias you will also have to duplicate it in the main repositories. Below is an example.

For example, you want to create an alias for the `ui-library` called `providers` for the `providers.ts` file.

In `ui-library` config you create an alias like this:

```
"$ui-library/providers": ["providers"]
```

After this you also create aliases in `app-hero` and `app-customer` configs:

```
"$ui-library/providers": ["@hero24/ui/src/providers"],
```

### Important notes
