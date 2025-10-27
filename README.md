🌤️ Weather React App

A simple and responsive Weather App built with React.js that fetches real-time weather data using the WeatherAPI.com API.

🚀 Features

Search for the weather by city name

Displays:

Current temperature

Weather condition (e.g., Cloudy, Sunny, etc.)

Location and country

Current date

Dynamic background based on temperature (warm/cold)

Fully responsive and dark-themed UI

Uses React Hooks (useState) for state management

🧠 Tech Stack

Frontend: React.js (Create React App)

API Provider: WeatherAPI.com

Styling: CSS3 / Flexbox

Build Tool: react-scripts

⚙️ Installation & Setup

1️⃣ Clone this repository

git clone https://github.com/your-username/weather-react-app.git
cd weather-react-app


2️⃣ Install dependencies

npm install


3️⃣ Create .env file
Create a file named .env in the root directory and add:

REACT_APP_WEATHER_KEY=your_api_key_here


4️⃣ Start the development server

npm start


Then open:
👉 http://localhost:3000

🌦️ API Reference

Base URL:

https://api.weatherapi.com/v1/


Example Request:

/current.json?key=YOUR_API_KEY&q=London&aqi=no


Example Response:

{
  "location": {
    "name": "London",
    "country": "United Kingdom"
  },
  "current": {
    "temp_c": 15.0,
    "condition": { "text": "Partly cloudy" }
  }
}

🧩 Folder Structure
weather-react-app/
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── components/
│
├── .env
├── .gitignore
├── package.json
└── README.md

🛠️ Build for Production

To create a production build:

npm run build


This will generate an optimised/build folder ready to deploy.

🔒 Security Note

Never commit your .env file to GitHub.

.gitignore already excludes it.

Keep your API key private.

🧑‍💻 Author

M Suryaveera

https://suryaveera-portfolio.netlify.app/


