# Weather App

A simple weather lookup app built with vanilla JavaScript and Webpack. Search any city and see current conditions, pulled live from the Visual Crossing Weather API.

## Features

- Live weather data (temperature, conditions, "feels like") via the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
- Weather condition icons, loaded via dynamic `import()` so only the icon actually needed gets fetched
- Loading state while data is being fetched
- Last-searched city remembered via `localStorage`
- Basic error handling for invalid city searches

## Tech stack

- Vanilla JavaScript (ES6+, async/await, dynamic imports)
- Webpack, with separate dev/prod configs merged from a shared base
- ESLint (flat config) + Prettier for linting and formatting

## Getting started

Install dependencies:

```
npm install
```

Start the dev server:

```
npm run dev
```

Build for production:

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
  index.js          # entry point
  app.js             # fetches weather data from the API
  ui.js               # renders weather data to the DOM
  storage.js          # localStorage get/set for last-searched city
  icons/              # weather condition SVG icons
  template.html       # HTML template used by html-webpack-plugin
webpack.common.js
webpack.dev.js
webpack.prod.js
eslint.config.js
.prettierrc.json
```

## Notes

- The API key is currently hardcoded in `app.js` for development convenience. Before deploying publicly, move it to an environment variable or a backend proxy so it isn't exposed in the client bundle.
- Units are set to metric (`unitGroup=metric`) in the API request.

## Credits

Weather icons from [visualcrossing/WeatherIcons](https://github.com/visualcrossing/WeatherIcons), licensed under GNU LGPL.
