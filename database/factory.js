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
var capitalize = require("capitalize");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/Role", async (faker, i, data) => {
  return {
    name: data.name
  };
});

Factory.blueprint("App/Models/User", async (faker, i, data) => {
  return {
    username: faker.username(),
    email: faker.email(),
    role_id: data.role_id,
    password: await Hash.make(faker.password())
  };
});

Factory.blueprint("App/Models/Package", faker => {
  var packageName = `${faker.word()} ${faker.word()}`;
  return {
    name: capitalize(packageName),
    slug: slugify(packageName),
    days: faker.integer({ min: 0, max: 30 }),
    photo: faker.avatar(),
    price: faker.floating({ min: 0, max: 3000, fixed: 2 }),
    airline: capitalize(faker.word())
  };
});
