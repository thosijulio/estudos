const config = {
  username: 'root',
  password: '1312',
  database: 'orm_example',
  host: 'localhost',
  port: '3307',
  dialect: 'mysql',
}

module.exports = {
  development: config,
  teste: config,
  production: config,
}
