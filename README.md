# Pinterest – Clone

Netcraft academy FED course final project.<br>
All the elements are active, you can search, add and remove pins. 

## Live Demo

[Pinterest-clone](https://netcraft-pinterest-clone.herokuapp.com) 
The demo uploaded to Heroku cloud platform.
Connected to MLab database with credentials set in the environment variables, to keep the them safe. 

## Technologies

* React 
* Redux
* MongoDB 
* Mongoose
* Node.js
* Express.Js

## Folder structure

* ~/server: node.js using express framework listening on port 9090. Connected to MongoDB
* ~/webapp: Components are placed in the src folder. 
* ~/webapp/src/store folder includes Redux configuration, actions and reducers.

### Prerequisites

Install MongoDB on the local host. [MongoDB-docs](https://docs.mongodb.com/manual/installation)
Configure the MongoDB to listening on port 27017 (default port) [MongoDB-docs](https://docs.mongodb.com/manual/reference/default-mongodb-port)

DB properties:
* DB Name: pinterest
* Collections: pins, users
* Pin schema example:

```json

{
    "_id" : ObjectId("5b7e4a3aaf96de46e85867d3"),
    "title" : "7 Free JavaScript E-Books and Tutorials",
    "body" : "JavaScript has never been hotter, thanks to projects like Node.js, JQuery and PhoneGap.",
    "img" : "https://i.pinimg.com/564x/47/2e/93/472e93e0a83b58aa3b7fabbce198de50.jpg",
    "link" : "https://readwrite.com/2010/12/04/6-free-javascript-e-books",
    "category" : "Tech",
    "__v" : 0
}
```

### Installing

1. Download or clone Pinterest repository
2. Install prerequisites using #npm install command from both server and WebApp folders
3. Start the server - run #node server/server.js
4. Start React app - run #npm run startreact

In your browser navigate to localhost:3000


## Author

* **Yana Taube** - [Linkedin](https://www.linkedin.com/in/yanataube)
