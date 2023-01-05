'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class map_position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  map_position.init({
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'map_position',
  });
  return map_position;
};