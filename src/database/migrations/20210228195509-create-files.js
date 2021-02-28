'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('Files', {
       id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      path: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      createdAt: {
        field: 'created_at',
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        field: 'updated_at',
        type:Sequelize.DATE,
        allowNull:false,
      },
      },{ freezeTableName: true});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('Files');
  }
};
