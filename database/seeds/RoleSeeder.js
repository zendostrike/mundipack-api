"use strict";

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class RoleSeeder {
  async run() {
    const adminRole = await Factory.model("App/Models/Role").create({
      name: "admin"
    });

    const clientRole = await Factory.model("App/Models/Role").create({
      name: "client"
    });

    console.log(adminRole);
    console.log(clientRole);
  }
}

module.exports = RoleSeeder;
