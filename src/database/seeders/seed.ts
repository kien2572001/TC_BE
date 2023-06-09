import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { DatabaseSeeder } from './database.seed';

async function runSeeder() {
  console.log('Seeding...');
  const app = await NestFactory.createApplicationContext(AppModule);
  const databaseSeeder = app.get(DatabaseSeeder);
  await databaseSeeder.seed();
  await app.close();
  console.log('Seeding completed! HELLO VIET nhac Ban bao kem di!');
}

runSeeder();
