module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        field: 'id',
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      local_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nickName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      img_url: {
        type: DataTypes.STRING,
        allowNul: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      underscored: true,
    },
  );
  User.associate = (m) => {
    User.hasMany(m.user_issue);
    User.hasMany(m.comment);
    User.hasMany(m.reaction);
  };
  return User;
};
