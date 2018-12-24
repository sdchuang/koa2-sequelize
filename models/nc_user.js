/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nc_user', {
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    true_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    other_avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wx_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    qq_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    sina_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    union_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    accid: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    from: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    last_time: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    continuous_login: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    study_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    study_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    is_online: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'nc_user'
  });
};
