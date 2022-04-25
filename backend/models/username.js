const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("comic", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};