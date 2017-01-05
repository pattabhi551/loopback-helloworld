/**
 * Created by pattabhiponugupati on 03/01/2017.
 */

// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.userDS;
ds.automigrate('user', function(err) {
  if (err) throw err;

  console.log('user created bitches');

  var user = {
    fullName: "Pattabhi Ponugupati",
    telephoneNumber: "0614390919",
    homePostalCode: "1185 BD",
    officePostalCode: "1102 CT",
    username: "pattabhi.pat@gmail.com",
    password: "defaultMealera",
    email: "pattabhi.pat@gmail.com",
    emailVerified: false
  };

  app.models.user.create(user, function(err, model) {
    if (err) throw err;

    console.log('Created:', model);
    ds.disconnect();
  });

});

