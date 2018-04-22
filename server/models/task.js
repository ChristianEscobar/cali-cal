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
      // references: {
      //   // This is a reference to another model
      //   model: User,
      //   // This is the column name of the referenced model
      //   key: 'id',
      //   // This declares when to check the foreign key constraint. PostgreSQL only.
      //   // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      // }
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startTime: {
      type: DataTypes.DATEONLY,
      // allowNull: false
    },
    endTime: {
      type: DataTypes.DATEONLY,
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

