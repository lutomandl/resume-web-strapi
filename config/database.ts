export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'resume-web-strapi'),
      user: env('DATABASE_USERNAME', 'lutomandl'),
      password: env('DATABASE_PASSWORD', 'wlakdbf2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
