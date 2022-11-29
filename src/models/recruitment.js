const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("recruitment", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        major_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recruitment_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        technology: {
            type: DataTypes.STRING,
            allowNull: true
        },
        period: {
            type: DataTypes.DATE,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        member: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
    });
};