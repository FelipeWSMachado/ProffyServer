import knex from 'knex';

export async function up(knex: knex){
  return knex.schema.createTable('class_schedule', table =>{
    table.increments('id').primary();

    table.string('week_day').notNullable();
    table.string('from').notNullable();
    table.string('to').notNullable();

    table.integer('class_id')
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

  
  });

}
export async function down (knex: knex){
  return knex.schema.dropTable('class_schedule');

}