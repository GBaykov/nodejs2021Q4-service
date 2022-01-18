import { ConnectionOptions } from 'typeorm';
import { POSTGRES_CONTAINERPORT, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from '../common/config';
 
const configORM: ConnectionOptions = {
    type: 'postgres',
    host: 'postgres',
    port: Number(5432),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    logging: false,
  entities: [
    // __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
};
 
export default configORM;