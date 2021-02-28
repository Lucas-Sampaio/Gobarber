'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'Users',
      'avatar_id',
      {
      type:Sequelize.INTEGER,
      references:{model:'Files',key:'id'},
      onUpdate: 'CASCADE',
      onDelete:'SET NULL',
      allowNull:true,
    })

  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Users','avatar_id');
  }
};
