import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class DatabaseSeeder {
  constructor(@InjectConnection() private readonly connection) {}

  async seed() {
    const filePath = path.resolve(__dirname, 'seed.sql');
    const sql = fs.readFileSync(filePath, 'utf8');

    await this.connection.query(sql);
  }
}
