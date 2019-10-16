import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        farm_name: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        farm_area: Sequelize.STRING,
        plantation: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
