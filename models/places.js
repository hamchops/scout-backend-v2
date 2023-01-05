'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Places.hasMany(models.dog_parks, {
        foreignKey: 'places_id',
        as: 'dog_parks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Places.hasMany(models.snow_resorts, {
        foreignKey: 'places_id',
        as: 'snow_resorts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Places.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Places',
    tableName: 'places'
  });
  return Places;
};