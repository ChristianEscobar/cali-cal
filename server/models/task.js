module.exports = function(sequelize, DataTypes) {

  // create a 'Task' model
  const Task = sequelize.define('task', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startTime: {
      type: DataTypes.TIME,
      // allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      // allowNull: false
    },
    dayID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Task;

  // Class Method
  Task.associate = function (models) {
    Task.hasOne(models.User);
  };
};

