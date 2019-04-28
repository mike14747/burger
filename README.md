# burger

### What the project does:



---

### Why the project is useful:



---

### How users can get started with the project:

To use this project, you'll need to do the following:

* clone this repository onto your computer or upload it to a web server of your choice

*  if you're running it locally on your pc, also perform these steps:

    * run 'npm i' from the terminal (this will install the npm modules: express, mysql and express-handlebars)
    * create a mysql database using the schema in: **schema.sql**
    * populate the newly created database with the data in: **seeds.sql**
    * create a connection.js file in the root folder with the following contents:

```
var mysql = require("mysql");

var connection = mysql.createConnection({
    database: "burger_db",
    host: "localhost",
    port: 3306,
    user: "<your_user>",
    password: "<your_mysql_password>"
});

module.exports = connection;
```

---

### More Info about this project:



* To find out more about the npm modules used in this project:
  * https://www.npmjs.com/package/mysql
  * https://www.npmjs.com/package/express
  * https://www.npmjs.com/package/express-handlebars

---

### This project was created and is maintained by:

* Mike Gullo
* https://github.com/mike14747
* Contact me at: mike4747@oh.rr.com for more info about this project.