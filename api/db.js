import mysql from "mysql"

export const db = mysql.createConnection({
   host: "auth-db343.hstgr.io",
   user: "u811623433_ihuntsdatabase",
   password: "Admin1234",
   database: "u811623433_ihuntsdatabase",


 
    // host: "auth-db343.hstgr.io",
    // user: "u811623433_uniview",
    // password: "Uniview1234",
    // database: "u811623433_uniview",

})