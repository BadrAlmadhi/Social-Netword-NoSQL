# Social-Netword-NoSQL


## Description 

To create a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list, we'll be using Express.js for routing and MongoDB as the database. The primary motivation behind this project is to learn how to use MongoDB and Express.js to create routes and interact with a database.

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Video](#video)


## Installation

To use this application, follow these steps after cloning the repository and opening it in Visual Studio Code:

 Open the index.js file in the repository.

Open the integrated terminal in Visual Studio Code. You can do this by going to the "View" menu and selecting "Terminal."

Install the required dependencies by running the following command in the terminal:

``````
npm install
``````
Once the dependencies are installed, start the server by running the following command:

``````
node index.js
``````

The server should now be running, and you can use the routes defined in the application.

To interact with the routes, you can use a tool like Insomnia. Insomnia is an HTTP client that allows you to send requests to the server and view the responses. You can download Insomnia from their website: https://insomnia.rest/

Launch Insomnia and create a new request. Set the HTTP method (GET, POST, etc.) and enter the URL for the specific route you want to test. For example, if you have a route /users to get all users, set the URL to http://localhost:3000/users.

Depending on the route, you may need to provide additional data in the request body or query parameters. Refer to the route definitions and documentation for the specific data requirements.

Send the request and view the response in Insomnia. Insomnia will show you the response status, headers, and the returned data.

Repeat the above steps for the different routes you want to test. You can use routes like GET /users/:id to select a user by their ID, or POST /users to create a new user.

By following these steps and using Insomnia, you'll be able to test and use the different routes in the application. Make sure to consult the application's documentation or code comments for details on the available routes and their requirements.

## License

MIT

## Video

[Watch](https://drive.google.com/file/d/1OKiNfDpmprt7Xi0vulHOBr-zX3-JVW5w/view)

