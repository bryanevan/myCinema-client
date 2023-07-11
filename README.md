# MyCinema App (Client Side)

## Table of Contents

- [Overview](#overview)
- [How to Run](#how-to-run)
- [Links](#links)
- [Technologies used](#technologies-used)
- [Dependencies](#dependencies)
- [API](#api)
- [Features](#features)
- [Credits](#credits)

## Overview

MyCinema is a movie app that allows users to access information about different movies. Users can register, update their persona    l information, and manage a list of their favorite movies.

The client side user interface complements the REST API and MongoDB database which have been [set up previously](https://github.com/bryanevan/myCinema-server-application), providing a seamless experience for users. Built with MongoDB, Express, and Node.js, MyCinema is a full-stack we application which offers a user-friendly, responsive and efficient solution for those seeking movie information and management.

## How to Run

1. Clone repository using command `git clone https://github.com/bryanevan/myCinema-client.git`

2. Install dependencies: 
    `bootstrap: ^5.2.3,`
    `prop-types: ^15.8.1,`
    `react: ^18.2.0,`
    `react-bootstrap: ^2.7.2,`
    `react-dom: ^18.2.0,`
    `react-router: ^6.10.0,`
    `react-router-dom: ^6.10.0`
  `devDependencies: `
   ` @parcel/transformer-sass: ^2.8.3,`
    `parcel: ^2.8.3,`
    `process: ^0.11.10`

3. Run the app using `parcel src/index.html`

4. After this, app should be available in the browser at `http://localhost:PATH`.

5. To access movies, register or use following test credentials: _Username:_ Test; _Password:_ test.

## Links

- [Live site URL](https://my-cinema808.netlify.app/)
- [API Code](https://github.com/bryanevan/myCinema-client/)

### Technologies Used

- React
- Bootstrap
- JavaScript
- HTML
- CSS

### Dependencies

This project has the following dependencies:

- "bootstrap: ^5.2.3,"
- "prop-types: ^15.8.1,"
- "react: ^18.2.0,"
- "react-bootstrap: ^2.7.2,"
- "react-dom: ^18.2.0,"
- "react-router: ^6.10.0,"
- "react-router-dom: ^6.10.0"

And dev dependencies:

- "@parcel/transformer-sass": "^2.8.3"
- "parcel": "^2.8.3"
- "process": "^0.11.10"

Furthermore, it uses the following linting configuration:

- [ESLint rules](https://github.com/mydea/simple-pokedex-app/blob/master/.eslintrc)
- [Prettier configuration](https://stackoverflow.com/questions/55430906/prettier-single-quote-for-javascript-and-json-double-quote-for-html-sass-and-c)

### API Documentation

Information about the [API used in this project](https://github.com/bryanevan/myCinema-server-application) (i.e. endpoints, dependencies, error responses, data scurity information) can be found [here](https://mycinema.herokuapp.com/documentation.html).

## Features

- User Authentication: The app allows users to create a new account, login, view and update their profile information, logout, and delete their account.

- Movie Database: The app grants access to a comprehensive movie database that contains information on a collection of movies.

- Detailed Movie Information: MyCinema provides a detailed overview of each selected movie, including an image, description, director, genre, and a list of similar movies.

- Search Functionality: Users can easily search for movies in the database using the search feature.

- Personalized Top Movies List: MyCinema provides users with the ability to create a personalized top movies list by adding their favorite movies. Users can easily add or remove movies from their top movies list using various methods, such as a toggle button to like or dislike movies.
