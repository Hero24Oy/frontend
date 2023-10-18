# Frontend

## How to start developing

### 1. Install dependencies

```
npm install
```

### 2. Watch packages

```
npm run dev
```

### 3. Watch app

_Hero (seller) app_

```
npm run dev:hero
```

_Customer (buyer) app_

```
npm run dev:customer
```

### Path aliases in hero24-common and ui-library

To create an alias you will also have to duplicate it in the main repositories. Below is an example.

For example, you want to create an alias for the `ui-library` called `providers` for the `providers.ts` file.

In `ui-library` config you create an alias like this:

```
"$ui-library/providers": ["providers"]
```

After this you also create aliases in `app-hero` and `app-customer` configs:

```
"$ui-library/providers": ["@hero24/ui-library/src/providers"],
```
