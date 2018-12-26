"use strict";

/*
|--------------------------------------------------------------------------
| PackageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class PackageSeeder {
  async run() {
    const packagesArray = await Factory.model("App/Models/Package").createMany(
      5
    );
    console.log(packagesArray);
  }
}

module.exports = PackageSeeder;
