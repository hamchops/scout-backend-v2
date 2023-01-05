'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Snow_Resorts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Snow_Resorts.belongsTo(models.Places, {
        foreignKey: 'places_id',
        as: 'snow_resorts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Snow_Resorts.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    chairlift: DataTypes.STRING,
    lodging: DataTypes.STRING,
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'places_id',
      onDelete: 'CASCADE',
      references: {
        model: 'places',
        key: 'id'
      }
  }
}, {
    sequelize,
    modelName: 'Snow_Resorts',
    tableName: 'snow_resorts'
  });
  return Snow_Resorts;
};