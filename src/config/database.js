module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'brainag',
  define: {
    timestamp: true,
    underscored: true, // diz que não quero utilizar o padrão camel case
    underscoredAll: true,
  },
};
