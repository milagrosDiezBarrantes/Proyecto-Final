const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define("comic", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};