'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // status: DataTypes.STRING,
        // doctorId: DataTypes.INTEGER,
        // patientId: DataTypes.INTEGER,
        // date: DataTypes.DATE,
        // timeType: DataTypes.STRING,
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING,
            },
            doctorId: {
                type: Sequelize.INTEGER,
            },
            patientId: {
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.STRING,
            },
            timeType: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bookings');
    }
};