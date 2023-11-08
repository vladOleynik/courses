import { DataSource } from 'typeorm';
import { CoffeeRefactor1699463930306 } from './src/migration/1699463930306-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';

export default new DataSource({
  type: 'postgres', // type of our database
  host: 'postgres', // database host
  port: 5432, // database host
  username: 'user', // username
  password: 'pass', // user password
  database: 'db', // name of our database,
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1699463930306],
});
