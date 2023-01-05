'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skateparks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skateparks.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    geolocation: DataTypes.GEOGRAPHY('POINT')
  }, {
    sequelize,
    modelName: 'Skateparks',
    tableName: 'skateparks'
  });
  return Skateparks;
};