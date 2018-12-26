"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();

      table
        .string("username", 80)
        .notNullable()
        .unique();

      table
        .string("email", 254)
        .notNullable()
        .unique();

      table
        .integer("role_id")
        .unsigned()
        .notNullable();

      table.string("password", 60).notNullable();

      table.timestamps();

      table
        .foreign("role_id")
        .references("id")
        .inTable("roles");
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
