const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("plan", {
    name: {
      type: DataTypes.ENUM('standar', 'premium', 'adm'),
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
   
  });
};