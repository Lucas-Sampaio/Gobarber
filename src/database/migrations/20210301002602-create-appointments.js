module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Appointments',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'Users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        provider_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'Users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        canceled_at: {
          type: Sequelize.DATE,
        },
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      { freezeTableName: true }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Appointments');
  },
};
