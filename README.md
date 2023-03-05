# Text-Editor

## Description

The motivation for this project was to create a progressive web application that utilized webpack, hot module replacement, service workers, and indexedDB. This way the user can have a fast, installable application that they can use offline. This project was made witht the purpose so that I and other developers can create notes or code snippets with or without an internet connection and be able to reliably retrieve them for later use.

During this project I learned: 
- how to install and implement webpack as a way to bundle assests to optimize performance
- using webpack loaders to load css and allow my application to translate code into different or outdate programming languages
- how to implement hot module replacement so my app updates without a full page refresh
- using the concurrently package to run my client and server simultaneoulsy
- how to install, activate, and implement service workers so that my application can be used offline
- how to user a manifest to handle the metadata for my application
- using CRUD operations in indexedDB

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file in the root, client, and server directories as well as the package-lock.json file. This application requires you to have the following dependencies:

Root Directory:
- concurrently 
- nodemon
- express
- if-env

Server Directory:
- nodemon
- express

Client Directory:
- code-mirror-themes
- idb
- @babel/core
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/runtime
- babel-loader
- css-loader
- html-webpack-plugin
- http-server
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- webpack-pwa-manifest
- workbox-webpack-plugin

The dependedcies can be installed by opening the terminal in the root directory and entering npm install. The user will be able to check the package.jason file and find the dependencies. In order to bundle the applications assets and build the client of the application the user will need to enter npm build in the root terminal. Lastly, to run the client and front end servers at the same time, the user will have to enter npm run start in ther root terminal.

To install the packages check these resources:
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/concurrently
- https://www.npmjs.com/package/nodemon
- https://www.npmjs.com/package/if-env
- https://www.npmjs.com/package/code-mirror-themes
- https://www.npmjs.com/package/idb
- https://www.npmjs.com/package/@babel/core
- https://www.npmjs.com/package/babel-loader
- https://www.npmjs.com/package/@babel/runtime
- https://www.npmjs.com/package/@babel/preset-env
- https://www.npmjs.com/package/@babel/plugin-transform-runtime
- https://www.npmjs.com/package/css-loader
- https://www.npmjs.com/package/html-webpack-plugin
- https://www.npmjs.com/package/http-server
- https://www.npmjs.com/package/style-loader
- https://www.npmjs.com/package/webpack
- https://www.npmjs.com/package/webpack-cli
- https://www.npmjs.com/package/webpack-dev-server
- https://www.npmjs.com/package/webpack-pwa-manifest
- https://www.npmjs.com/package/workbox-webpack-plugin


## Usage

This application can be used to create notes or code snippets with or without an internet connection and be able to reliably retrieve them for later use. The application can be deployed using express by using the steps described in the installation section of this document. The application can also be deployed using Heroku. 

When the opens the application, they are presented with a homepage that displays navigation bar with an install button. In the body of the application there is a text editor where the user can create notes and code snippets for later use. When the user clicks the install button they are prompted and asked if they would like to install the application. When the user confirms the application is installed, and the application is opened locally on thier device. A shortcut is also created on the user's desktop for easy access. With the installed application the user is able to fully use the application and retrieve notes that they have made using the application, even when they are offline. To unistall the application, you can go to the control panel on your device and uninstall it like any other application.

The deployed Heroku application can be view at: https://guarded-forest-85262.herokuapp.com/

## Credits

I followed these links and tutorials in the completion of this project:

- https://babeljs.io/
- https://www.npmjs.com/package/webpack-pwa-manifest
- https://www.npmjs.com/package/workbox-webpack-plugin

## License

ISC license is used for this project.
