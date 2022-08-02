// imports every routes from api folder.
// we will use glob package.
//  file ma vako every .routes.js file lai load garne.

/*
 Programmer : Kiran Gajurel
 Description: The purpose of this file to load the routes file.
 */

 const glob = require("glob");

 module.exports = app => {
   let routePath = "api/**/*.routes.js";
   let version = "/api/v1/:lang";
   glob.sync(routePath).forEach(function(file) {
     require("../" + file)(app, version);
   });
   console.log("Routes are loading..");
 };
 