'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('Users', {
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
      email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password_hash: {
          type:Sequelize.STRING,
          allowNull:false,
      },
      provider: {
        type:Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull:false,
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

     await queryInterface.dropTable('Users');
  }
};
