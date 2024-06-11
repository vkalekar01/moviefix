Welcome to MovieFix, a React-based web application designed to help movie enthusiasts discover and explore a wide range of films. This project was bootstrapped with Create React App.

## Available Scripts

To run the project locally, follow these steps:

1. Install project dependencies by running the following command:
   `npm install`

2. After installing the packages, start the project with the command:
   `npm start`

3. The application will automatically open in your default web browser at [http://localhost:3000](http://localhost:3000.)

## Features Implemented

MovieFix offers several features to enhance your movie browsing experience:

1. Header Component: Displays the app name, "MOVIEFIX".
2. Filter Component: Allows users to filter movies based on genre. Genres are fetched from an external API.
3. Movies Component: Loads and displays movies released from 2012 to the current year. Twenty movies are shown per year.
4. Movie Details Component: Provides detailed information about a selected movie when clicked. Information includes title, overview, release date, and more.
5. Casting List Component: Displays the cast details for a selected movie, fetched from the API.
6. Read More/Read Less Functionality: Implemented for cast members to manage visibility based on user interaction.
7. Loaders: Loading indicators are displayed while data is being fetched from APIs.
8. Lazy Loading: Images are lazy-loaded to optimize performance.
9. Optimization: Various techniques are employed to optimize the application's performance.
10. Responsive Design: Media queries ensure a pleasant viewing experience across different devices, including desktops.

## Known Issues

The scroll-up functionality for navigating through previous year's movies is currently not implemented. Efforts were made to implement it but were unsuccessful.

## External APIs

The following APIs are utilized within the MovieFix application:

1. To retrieve a list of movies: [The Movie Database (TMDb)](https://api.themoviedb.org/3/discover/movie)
2. To fetch movie details based on movie ID: [TMDb Movie Details API](https://api.themoviedb.org/3/movie/{movie_id})
3. To obtain a list of genres: [TMDb Genre List API](https://api.themoviedb.org/3/genre/movie/list)
4. To retrieve casting details for a movie: [TMDb Credits API](https://api.themoviedb.org/3/movie/{movie_id}/credits)

## Additional Resources

1. GitHub Repository:
2. Application Demo: [https://go.screenpal.com/watch/cZ1XQwVN4vi]
