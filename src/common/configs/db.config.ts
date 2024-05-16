import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const entities = (process.env.TYPEORM_ENTITIES || '').split(',');
    const migrations = (process.env.TYPEORM_MIGRATIONS || '').split(',');

    return {
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      port: parseInt(process.env.TYPEORM_PORT),
      entities: entities,
      migrations: migrations,
      migrationsTableName: 'migrations',
      synchronize: false,
    };
  }
}

const dbConfigService = new DatabaseConfigService();
export { dbConfigService };
