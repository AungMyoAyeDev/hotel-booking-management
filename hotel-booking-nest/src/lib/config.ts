export default () => ({
  port: process.env.PORT || 3000,
  database: {
    host: process.env.PGHOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    user: process.env.PGUSER || 'user',
    password: process.env.PGPASSWORD || '123456',
    name: process.env.PGDATABASE || 'test',
  },
});
