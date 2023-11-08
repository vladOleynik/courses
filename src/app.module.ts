import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'postgres', // database host
      port: 5432, // database host
      username: 'user', // username
      password: 'pass', // user password
      database: 'db', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
