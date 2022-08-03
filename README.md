# Setup
1. Clone main branch.
2. Run `npm i` your local project directory to install dependencies.
3. Follow instructions below for handling the API key.
4. Run `npm start` to start development environment. (see `"scripts"` in `package.json` for complete list of scripts)
5. App should be running on http://localhost:3000 by default.

# Handling API Key
1. check .gitignore for this path: `/src/config.js`. If it does not exist, add it.
2. Create a new file in the src folder
3. Name it `config.js`.
4. Navigate to https://openweathermap.org/api to grab your own API key. Only key needed is the Current Weather Data API.
5. Add `export const url = 'YOUR-API-KEY-HERE';` to `config.js`.
6. Replace url value with the Current Weather Data key you received from https://openweathermap.org/api.
