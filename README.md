# The Coffee Shop Web App

The Coffee Shop is a web application written using [ReactJS](https://reactjs.org/) alongside a server created with [NodeJS](https://nodejs.org/) using [ExpressJS](http://expressjs.com/). Features include:

- User Authentication using [PassportJS](http://www.passportjs.org/) and a session cookie.
- Data Storage using [MongoDB](https://www.mongodb.com/), [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and [Mongoose](https://mongoosejs.com/).
- Frontend (ReactJS) code separated from the backend (NodeJS/ExpressJS).
- Protected server routes with authentication.
- Responsive UI using the [React-Bootstrap](https://react-bootstrap.github.io/) framework, Bootstrap build for React.
- Searchable items.
- Slack notification integration via Slack webhook to send purchase receipt.
- Hosted on [Heroku](https://www.heroku.com/)

### [The Coffee Shop hosted on Heroku](https://jn-the-coffee-shop.herokuapp.com)

## Installation

#### Git clone this repository.

#### Navigate to application folder.

#### In a terminal, run the following command to install all necessary modules.

`npm install`

- Create a `.env` file in the root folder.
- Inside `.env` create:

`SESSION_SECRET=`

Write any secret phrase you wish to utilize as a secret session storage. Make sure to keep it secure once you have saved it to the file.

`MONGODB_URI=`

Use this to write down your MongoDB url. If using a local instance of MongoDB that would look something like:

`MONGODB_URI="mongodb://localhost:27017/<database-name-here>"`

If using MongoDB Atlas instance, then write your link located in your Atlas dashboard along with your credentials inside the link.

For the Slack Webhook, go to the `Review.js` file inside the `src/Components` folder and set the `webhookUrl` value the webhook provided by Slack.

## Usage

Make sure that your MongoDB instance is working by running the command

`mongosh`

If working with MongoDB Atlas, run

`mongosh "mongodb+srv://<your-cluster-information-here>" --username <your-username-here>`

To run the application locally first run:

`npm run start-app`

After the server has come up, open a browser at:

`http://localhost:3000`

### Docker

To use this application inside of a Docker container, run the following command in a terminal inside the project folder:

`docker build -t coffee-shop .`

To run the Docker container, run:

`docker run --rm -it -p 3000:3000/tcp -p 5000:5000/tcp coffee-shop:latest`

#### Enjoy the app!
