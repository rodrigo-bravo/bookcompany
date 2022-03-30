# BookCompany

<br>
<div align="center">  
   <p><b>Full-Stack CRUD Application With Angular + Firebase Database + Authentication + REST APIs</b></p>
  
  <img src="https://brandslogos.com/wp-content/uploads/images/large/angular-icon-logo.png" width="35"></img> 
  <img src="https://user-images.githubusercontent.com/89810908/160763806-50c19cfc-98ab-4095-bf1d-30fabc2dbc8b.png" width="38"></img>
  <img src="https://user-images.githubusercontent.com/89810908/160764123-df74b910-317e-4b11-a670-6a6bd582e685.svg" width="35"></img>
  <img src="https://user-images.githubusercontent.com/89810908/160764862-abab2359-43b5-47ae-a105-556b7322c774.png" width="60"></img>


  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158890254-6ad1f21b-bc46-464d-a344-76fc0700fc05.PNG" width="750" style="border-radius:50%"></img>

</div> 
<div>
<br>
  
#### **Technologies & Features**
-  **Angular front-end** framework
-  **Firebase back-end** real-time NoSQL cloud database
-  **RESTful APIs**: Google Maps & New York Times.
-  NgRx state management
-  Google Registrar
</div> 
<br>


## Table of Contents
 * [What is BookCompany?](#what-is-bookcompany)
 * [Integrated RESTful APIs](#integrated-restful-apis)
   * [Google Maps Platform](#google-maps-platform)
      * [Maps JavaScript API & Places API](#maps-javascript-api-and-places-api)
      * [Directions API](#directions-api)
   * [New York Times Books API](#new-york-times-books-api)
      * [Book Reviews](#book-reviews)
      * [Best Sellers List](#best-sellers-list)
 * [Authentication](#authentication)
   * [Login](#login)
     * [Token-Based Authentication](#token-based-authentication)
     * [Firebase Authentication](#firebase-authentication)
   * [Register](#register)
     * [Token-Based](#token-based)
     * [User Registration with Angular Firebase](#user-registration-with-angular-firebase)
 * [User Profile](#user-profile)
 * [Personal Collection](#personal-collection)
   * [Projects](#projects)
     * [Create](#create)
     * [Update](#update)
     * [Delete](#delete)
 * [Getting Started](#getting-started)
   * [Preconditions](#preconditions)
   * [Installation](#installation)
 * [Development Server](#development-server)
 * [Tests](#tests)
   * [Unit tests](#unit-tests)
   * [e2e tests](#end-to-end-tests)
 * [Build](#build)
 * [Author](#author)


## What is BookCompany?
BookCompany is a web application to store the right book, song, or even podcast for every moment on your personal collection.

<div align="center">
 <p><b>Landing Page</b></p>
  
<img src="https://user-images.githubusercontent.com/89810908/160753926-b8c8bc23-5ad2-40aa-8f46-01b6b94a7632.PNG" width="750" style="border-radius:50%"></img>
</div> 

## Integrated RESTful APIs
Application programming interface that allows for interaction with RESTful web services

### Google Maps Platform

Dynamic, interactive, deeply customized maps, location, and geospatial experiences for the app. services. Click [Google Maps Platform](https://console.cloud.google.com/google/maps-apis/start) to get started with the Google Cloud Console to manage services, credentials, billing, APIs, and SDKs.

#### Maps JavaScript API and Places API

Users can search for landmarks associated with their favorite books or songs without having to leave the app. The Places API contains location data for over 200 million places and autocomplete. With the Maps JavaScript API, the autocomplete mechanism is integrated with the map.
<div align="center">  
   <p><b>Landmarks Search Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158891867-e514ee07-fd02-4183-b2ea-1b2d84e73f92.PNG" width="750" style="border-radius:50%"></img>
</div> 

#### Directions API
The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between landmarks and important locations for driving, cycling, transit, and walking.
<div align="center">  
   <p><b>Landmarks Directions Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158899092-e7a3fe32-f36f-42c7-a236-c3d1c112ff98.gif" width="750" style="border-radius:50%"></img>
</div> 

### New York Times Books API
The Books API provides information about book reviews and The New York Times Best Sellers lists.

#### Book Reviews
The book reviews service lets you get NYT book review by author.

<div align="center">  
   <p><b>Book Reviews Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/159611574-fc281cb3-9e9e-402f-b7c1-9555c3ddf53c.PNG" width="750" style="border-radius:50%"></img>
</div> 

#### Best Sellers List
The best sellers service returns a list of Times best sellers list (for hardcover-fiction) updated weekly.

<div align="center">  
   <p><b>Best Sellers Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/159611584-457d7796-fb04-466e-b599-e1d510647ef3.PNG" width="750" style="border-radius:50%"></img>
</div> 



## Authentication
Token-based authentication and Firebase Authentication SDK are integrated into this app to provide methods to create and manage users.

### Login

#### **Token-based Authentication**

- Login Requested
   - Dispatch `LOGIN Requested` action
   - Add action
   - Add effect (to dispatch either `LOGIN Success` or `AuthError`)
- Login Success
   - Dispatch `LOGIN Success` action
   - Add reducer (to create new state)
     - Authentication state `isLoggedIn` is set to true and token and email added to the user object during successful log-ins.
     - Authentication state `isLoading` is set to false.
   - Add effect (to add token to localStorage and redirect user)
     - Returns an observable identical to the source. 
     - Updates online status to true. 
- Login Failed
   - Dispatch `AuthError` action
   - Add reducer (to create new state)

#### **Firebase Authentication**
- Generate auth service and user interface files to create a Firebase authentication system with Angular.
- Use auth service to create login authentication with Angular and Firebase.
- Social logins using Firebase’s Google and Twitter auth provider.

<div align="center">  
   <p><b>Login Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158891203-a0a8d0e9-4f90-401a-a938-41a41a1263ad.png" width="750" style="border-radius:50%"></img>
</div> 

### Register

#### **Token-based**

- Register Requested
   - Dispatch `REGISTER Requested` action
   - Add action
   - Add effect (to dispatch either `REGISTER Completed` or `AuthError`)
- Register Completed
   - Add action
   - switchMap to `LOGIN Success` and `Update Profile`
- Register Failed
   - Dispatch `AuthError` action

#### **User Registration with Angular Firebase**
- Use auth service for user registration with Angular and Firebase.
- Sign up using Firebase’s Google and Twitter auth provider.
<div align="center">  
   <p><b>Register Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158891534-cbf296e3-cd2c-4bb5-8161-e0cbb5942972.PNG" width="750" style="border-radius:50%"></img>
</div>


## User Profile
Profile section to change username and profile picture, look up calendar events, or simply update profile status.
<div align="center">  
   <p><b>Profile Page</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/158890981-006bb162-5133-4fda-8ca0-1a3a6af52f31.PNG" width="750" style="border-radius:50%"></img>
</div>

## Personal Collection
Main section to allow users to store their projects in their own collection.

### Projects


#### **Create**
<div align="center">  
   <p><b>Home Page (Upload Modal)</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/160908939-33dbb4b3-724f-4e10-937b-32808c7ba63b.PNG" width="750" style="border-radius:50%"></img>
</div>

#### **Update**
<div align="center">  
   <p><b>Home Page (Edit Modal)</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/160909122-26e41d4a-da1c-47ea-adea-d77117436dac.PNG" width="750" style="border-radius:50%"></img>
</div>


#### **Delete**
<div align="center">  
   <p><b>Home Page (Delete Modal)</b></p>

  <p></p>
<img src="https://user-images.githubusercontent.com/89810908/160909071-86609fa4-74db-4cd3-a246-225fe95a9f21.PNG" width="750" style="border-radius:50%"></img>
</div>




## Getting Started
### Preconditions
- Google Maps API Key
- New York Times API Key Auth
- Firebase Cloud Console Account
- Node and npm

### Installation
```
cd bookcompany
npm install
```

## Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tests

### Unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-end tests

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Author

Rodrigo E. Bravo

rodrigoebravo@outlook.com

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


