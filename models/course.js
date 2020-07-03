'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Sequelize.Model{}
        Course.init({
            id:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please enter a title."
                    },
                },
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate:{
                    notNull: {
                      msg: "Please enter a description."
                    },
                },
            },
            estimatedTime:{
                type: Sequelize.STRING,
                allowNull:true,
            },
            materialsNeeded:{
                type: Sequelize.STRING,
                allowNull:true
            },
        }, {sequelize});

        Course.associate = (models)=> {
        models.Course.belongsTo(models.User, {
            foreignKey:{
                fieldName: "userId",
                allowNull: false
            }
        });
  };
  return Course;
}