const config = {
  username: 'root',
  password: '1312',
  database: 'orm_example',
  host: 'database',
  port: '3306',
  dialect: 'mysql',
}

module.exports = {
  development: config,
  test: config,
  production: config,
}
