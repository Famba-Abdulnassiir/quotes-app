# quotes-app
A simple RESTful API built with Express.js, providing a collection of quotes. Retrieve random quotes or access quotes by their IDs using the available routes. This project is for learning purposes at Kanzu Code Foundation backend track [Assignment 2]

# Installation 
1. Clone the Repository:

```
git clone https://github.com/Famba-Abdulnassiir/quotes-app.git
```

2. Install the dependencies:
```
npm install
```
3. Start the Server and it will run at http://localhost:8000
```
npm start
```

# API Routes
- **GET /quotes:** Get all quotes
- **GET /quotes/:id:** Get quote by id
- **POST /quotes:** Add New quote.
- **PUT /quotes/:id:** Update Quote by ID
- **DELETE /quotes/:id** Delete quote by ID.

# Sample scheme
```
{
  "id": 1,
  "quote": "Do not pity the dead, Harry. Pity the living, and, above all those who live without love",
  "author": "Albus Dumbledore"
}
```
# Usage
You can Test the API with your favorite tool like `Postman` or `Fetch it direct to your Frontend App.`


# Contributing 
Contributotions are welcome, For major changes please open an issue and eraborate the change, Feel free to fork the Project and work make any neccessary changes and create a pull request.