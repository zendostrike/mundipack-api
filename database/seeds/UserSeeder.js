"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UserSeeder {
  async run() {
    const adminUser = await Factory.model("App/Models/User").create({
      role_id: 1
    });

    const clientUser = await Factory.model("App/Models/User").create({
      role_id: 2
    });

    console.log(adminUser);
    console.log(clientUser);
  }
}

module.exports = UserSeeder;
