import { DataSource, DataSourceOptions } from 'typeorm';
import { dbConfigService } from './db.config';
import { config } from 'dotenv';

config();

export default new DataSource(
  dbConfigService.createTypeOrmOptions() as DataSourceOptions,
);
