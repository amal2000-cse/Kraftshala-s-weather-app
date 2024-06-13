# Weather App

This is a weather application built with React and Vite. It fetches current weather information from the Open Weather API based on user input and displays it. The application also includes a feature to toggle between dark mode and light mode.

## Table of Contents

- [Weather App](#weather-app)
  - [Table of Contents](#table-of-contents)
  - [Instructions to Run the Application Locally](#instructions-to-run-the-application-locally)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Approach and Technologies Used](#approach-and-technologies-used)
  - [Known Issues or Limitations](#known-issues-or-limitations)

## Instructions to Run the Application Locally

### Prerequisites

- Node.js and npm installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/amal2000-cse/Kraftshala-s-weather-app.git
    cd Kraftshala-s-weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Open Weather API key:

    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4. Run the application:

    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to see the application in action.

## Approach and Technologies Used

- **React**: Used for building the user interface.
- **Vite**: A fast build tool that provides a quick development environment for React applications.
- **CSS**: Used for styling the application and ensuring responsiveness.
- **Open Weather API**: Used to fetch the current weather information based on user input.

### Component Breakdown

- `SearchBar`: A component for user input to search for weather information by city name or zip code.
- `WeatherCard`: A component to display the weather information.
- `ToggleMode`: A component to toggle between dark and light modes.
- `App`: The main component that combines all the other components and manages the state.

### Styling

- Used CSS Flexbox for centering and responsive design.
- Added transitions for smooth mode toggling.

## Known Issues or Limitations

- The application currently fetches weather data for only one location at a time.
- The UI might need further optimization for very small screen sizes.
- Error handling is basic; more detailed user feedback could be implemented.
- The weather information is not updated automatically; users need to perform a new search to refresh the data.
