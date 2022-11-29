const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize({ ...config, sync: false });

db.User = require("./user")(sequelize, Sequelize);
db.Review = require("./review")(sequelize, Sequelize);
db.Recruitment = require("./recruitment")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User.hasMany(db.Review, { foreignKey: "user_id", targetKey: "id" });
db.Review.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Recruitment, { foreignKey: "user_id", targetKey: "id" });
db.Recruitment.belongsTo(db.User, { foreignKey: "user_id" });

db.Recruitment.hasMany(db.Review, { foreignKey: "recruitment_id", targetKey: "id" });
db.Review.belongsTo(db.Recruitment, { foreignKey: "recruitment_id" });

module.exports = db;
