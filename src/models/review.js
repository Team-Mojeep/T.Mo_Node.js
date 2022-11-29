const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("review", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        recruitment_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        writer: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        star: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(30),
            allowNull: true
        }
    });
};