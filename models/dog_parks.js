'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog_Parks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dog_Parks.belongsTo(models.Places, {
        foreignKey: 'places_id',
        as: 'dog_parks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Dog_Parks.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    divided_by_size: DataTypes.STRING,
    trails_nearby: DataTypes.STRING,
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
    modelName: 'Dog_Parks',
    tableName: 'dog_parks',
  });
  return Dog_Parks;
};