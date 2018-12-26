"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/
var slugify = require("slugify");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async faker => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  };
});

Factory.blueprint("App/Models/Package", faker => {
  var packageName = faker.sentence({ words: 3 });
  return {
    name: packageName,
    slug: slugify(packageName),
    days: faker.integer({ min: 0, max: 30 }),
    photo: faker.avatar(),
    price: faker.floating({ min: 0, max: 3000, fixed: 2 }),
    airline: faker.word()
  };
});
