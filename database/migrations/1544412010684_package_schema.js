"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PackageSchema extends Schema {
  up() {
    this.create("packages", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("slug").notNullable();
      table.integer("days").unsigned();
      table.string("photo");
      table
        .decimal("price", 8, 2)
        .unsigned()
        .notNullable();
      table.string("includes");
      table.string("not_includes");
      table.string("airline");
      table.json("schedule");
      table.json("politics");
      table.json("suggestions");
      table.timestamps();
    });
  }

  down() {
    this.drop("packages");
  }
}

module.exports = PackageSchema;
