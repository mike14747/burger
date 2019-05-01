# burger

## What the project does:

* This project allows users, to place custom veggie burger orders by picking one things from each of the following categories:
  * Patty type
  * Bun type
  * Topping group
* Once the order is placed, the order is stored in the database, then added to the 'Waiting to be eaten' area in the lower left portion of the screen.
* The user can then click the 'Devour Burger' button next to any burger and it will move to the 'Devoured Burgers' area in the lower right portion of the screen.
* Users can delete 'Devoured Burgers' by clicking on any of the 'Delete' buttons.
* There is a hidden link that can restore all of the 'Devoured Burgers' to their uneaten state.
  * Secret link location: click on the period at the end of the 'Add your own condiments / sauces at the condiment bar.' sentence. Shhh, don't tell anyone.

---

## How users can get started with the project:

To use this project, you'll need to do the following:

* clone this repository onto your computer or upload it to a web server of your choice

* if you're running it locally on your pc, also perform these steps:

    * run 'npm i' from the terminal (this will install the npm modules: express, mysql and express-handlebars)
    * create a mysql database using the schema in: **schema.sql**
    * populate the newly created database with the data in: **seeds.sql**
    * create a connection.js file in the config folder with the following contents:

```
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        database: "<your db name goes here>",
        host: "localhost",
        port: 3306,
        user: "<your username goes here>",
        password: "<your password goes here>"
    });
}

connection.connect();
module.exports = connection;
```

---

## About the code in this project:

*  This project is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM, following the MVC design pattern.
*  It use Node (including Express) and MySQL to query and route data and Express-Handlebars to generate your HTML.
  * config/connections.js: handles the MySQL connection, then exports that connection to config/orm.js.
  * config/orm.js includes an object that contains all 8 MYSQL queries needed for the different parts of this project. This object is then exported to models/burger.js.
  * models/burger.js calls the ORM object's functions using burger specific user input. All this is done inside a burgers object which is exported to: controllers/burgers_controller.js.
  * controllers/burgers_controller.js handles all the routing... matching specific CRUD requests to their proper functions using express.Router()... which is exported to server.js. It also renders handlebars pages to the browser when applicable.
  * server.js sets up the server, ties everything together and uses handlebars to render the html to the browser.
  * public/js/process.js validates all user input, then performs the appropriate AJAX calls based upon user input. These AJAX calls are looped back into controllers/burgers_controller.js for processing.

Interesting notes about the code in this project:
* The database contains 4 tables.
  * burgers (which is just a collection of foreign keys of the other 3 tables)
  * patties (whose contents are used to dynamically create the list of patties when placing an order)
  * buns (whose contents are used to dynamically create the list of buns when placing an order)
  * toppings (whose contents are used to dynamically create the list of toppings when placing an order)
* On the main homepage route, 4 queries are performed.
  * One to list all the burgers on the page in both the 'Uneaten' and 'Devoured' areas.

```
SELECT bg.id, p.patty, bn.bun, t.topping, bg.devoured 
FROM burgers AS bg 
INNER JOIN buns AS bn ON bg.bun_id=bn.bun_id 
INNER JOIN patties AS p ON bg.patty_id=p.patty_id 
INNER JOIN toppings AS t ON bg.topping_id=t.topping_id 
ORDER BY bg.id ASC
```
Handlebars (in the index.handlebars file) is then used to determine which group each burger is placed in.
```
{{#each burgers}}
{{#unless devoured}}
```
and
```
{{#each burgers}}
{{#if devoured}}
```
  * The next 3 queries are one each to populate the patties, buns and toppings sections of the burger ordering area.
  * Each of those queries is then rendered into the browser via index.handlebars using handlebars 'partials' for each of patties, buns and toppings like this:
```
{{#each patties}}
{{> patties}}
{{/each}}
```
and
```
{{#each buns}}
{{> buns}}
{{/each}}
```
and
```
{{#each toppings}}
{{> toppings}}
{{/each}}
```

Since the results from 4 queries need to be sent to the server to be rendered in a single object, I used the 'next()' callback function to that adds an ojbect (at each step of the way) to the object that will become the response. That was done as follows in controllers/burgers_controller.js:

```
var selObj = {};

router.get("/", (req, res, next) => {
    burger.selectAll((data) => {
        selObj.burgers = data;
    });
    next();
});

router.get("/", (req, res, next) => {
    burger.getPatties((data) => {
        selObj.patties = data;
    });
    next();
});

router.get("/", (req, res, next) => {
    burger.getBuns((data) => {
        selObj.buns = data;
    });
    next();
});

router.get("/", (req, res) => {
    burger.getToppings((data) => {
        selObj.toppings = data;
        res.render("index", selObj);
    });
});
```
---

## More Info about this project:

* To find out more about the npm modules used in this project:
  * https://www.npmjs.com/package/mysql
  * https://www.npmjs.com/package/express
  * https://www.npmjs.com/package/express-handlebars

---

## This project was created and is maintained by:

* Mike Gullo
* https://stark-cliffs-35399.herokuapp.com/
* https://github.com/mike14747
* Contact me at: mike4747@oh.rr.com for more info about this project.