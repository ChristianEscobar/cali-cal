module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    taskId: {
      type: Sequelize.INTEGER,
      references: {
        model: Task,
        key: 'id',
        // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return User;
}