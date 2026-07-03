# Webpack Boilerplate

A clean starting point for front-end projects, with a dev/prod webpack setup, linting, and formatting already wired up.

## What's included

- **Webpack**, split into three configs:
  - `webpack.common.js` — shared entry, output, plugins, and loaders
  - `webpack.dev.js` — dev server, fast source maps
  - `webpack.prod.js` — production build, optimized source maps
- **HTML generation** via `html-webpack-plugin` (`src/template.html`)
- **CSS support** via `style-loader` + `css-loader`
- **Image assets** (`png`, `svg`, `jpg`, `jpeg`, `gif`) via Webpack's built-in asset modules
- **ESLint** (flat config) for catching bugs
- **Prettier** for consistent formatting, with `eslint-config-prettier` to prevent rule conflicts

## Getting started

Install dependencies:

```
npm install
```

Start the dev server (opens automatically, hot reloads on save):

```
npm run dev
```

Build for production (outputs to `dist/`):

```
npm run build
```

## Scripts

| Script           | What it does                                  |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Starts webpack-dev-server in development mode |
| `npm run build`  | Bundles the app for production into `dist/`   |
| `npm run lint`   | Runs ESLint across the project                |
| `npm run format` | Formats all files with Prettier               |

## Project structure

```
src/
  index.js         # entry point
  template.html    # HTML template used by html-webpack-plugin
webpack.common.js
webpack.dev.js
webpack.prod.js
eslint.config.js
.prettierrc.json
```

## Code style

- 2-space indentation
- Double quotes
- Semicolons always
- Enforced automatically via ESLint + Prettier — run `npm run format` before committing
