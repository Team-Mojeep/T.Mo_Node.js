const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        majorType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};