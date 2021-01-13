# Note-App

> With this app you can create and delete notes for yourself.

To add a note, just click on "Notiz erstellen..." and you can add a title and your note. To delete it, just click on the trashbin icon.

### **Stack used:**  
* MongoDB - Document database
* Express(.js) - Node.js web framework
* React(.js) - Client-side JavaScript framework
* Node(.js) - JavaScript web server 

## Quick Start

To start you need to add an .env file with your own database credentials in the Note-App folder.

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:9000 and client on http://localhost:3000
```

## **Screenshots:**

**Home/Landing Page**
![Overview Note-App](./images/home.PNG?raw=true)

## TODOs
- [ ] Add authentication for every individual user
- [ ] Add toggle for light and dark mode

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page.

## App Info

### Author

Ingo Speckens

### Version

1.0.0

### License

This project is licensed under the ISC License