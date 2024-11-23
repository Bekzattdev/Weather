# Weather App

Weather App is a web application for retrieving current weather and forecasts for a selected city. The app is built with React, TypeScript, and Redux Toolkit for state management and routing.

## Technologies

- **React** — A library for building user interfaces.
- **TypeScript** — A strongly typed programming language for JavaScript.
- **Redux Toolkit** — Simplified state management.
- **React Router** — Routing for React applications.
- **Sass (SCSS)** — Styling components.
- **RTK Query** — For API integration.

## Features

- City search with autocomplete.
- Retrieve current weather for a selected city.
- View extended weather forecasts.
- Support for geolocation to detect user location.
- Error handling, including a 404 page.

## Installation

- git clone https://github.com/Bekzattdev/Weather.git
- cd Weather
- npm install
- The app will be available at http://localhost:3000.

## Production Build

- npm run build
- The built files will be located in the /dist folder.

## API

The app uses an external weather API for fetching data. API configurations are stored in the .env file.

- Example .env file
- REACT_APP_WEATHER_API_KEY=your_api_key
- REACT_APP_WEATHER_API_URL=https://api.weatherapi.com/v1

## Highlights

- TypeScript for safe and predictable development.
- Modular SCSS styles for better maintainability.
- Robust error handling for both routing and API failures.
- Easily extendable for additional features.

## Future Plans

- Add multi-language support (i18n).
- Improve data visualization.
- Implement favorite cities feature.
