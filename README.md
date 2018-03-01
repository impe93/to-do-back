# To Do Backend

This project is born to **give a backend** to my other **front-end project** called [to-do](https://github.com/impe93/to-do). It is an easy express application for make **CRUD** (Create, Read, Update, Delete) operations, gives the possibility to **register** and serve the front-end app. Is it **possible to try** it at https://lorenzo-imperatrice-to-do.herokuapp.com .

## Getting Started

### Prerequisites

It's possible to run this in a local environment only if there's already installed [NodeJS](https://nodejs.org) (I’m using version 7.7.3), [NPM](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/).

### Installing

After having installed those 3 things you have to run the command `npm install` to **install the project dependency** in the project directory. It’s important to **change the mongoDB URL** in the app.js code or pass this as env parameter `(MONGODB_URI=<db url>)` to establish the connection with the DB. It’s possible to **lunch the app** just by run the command `npm run dev`, and this will start the project. The app tries to start on **port 80** but you can change that by passing `PORT=<port number>` as env parameter. The **port 80 can be an issue** for people that use Windows as OS because on that port is possible to find ISS running, for the other that use Linux or MacOS will need to use `sudo` command when running it.

## Deployment

Before deploying the app is necessary to build it with babel, for do that just run `npm run build` and you’ll be able to find it in the dist folder, the last thing to do in order to prepare the deploy is to copy the `src/dist` folder inside the `dist` folder, this because the dist folder will compile in a wrong way, so this is the fastest way is to make the things work properly. I deploy this web application on Heroku because it offers a free plan that is perfect for test the app in a real environment and learns how to do it properly.

## Built With

* NodeJS
* MongoDB
* ExpressJS
* Angular 5 (this app use the compiled code)

## Author

* Lorenzo Imperatrice

## License

This project is licensed under the **MIT** License