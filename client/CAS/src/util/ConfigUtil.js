/**
 * Created by nick on 2017/4/20.
 */

var ConfigUtil = {

    sqliteDebuggable : false,

    sqliteDbDisplayName : 'boltDb',
    sqliteDbName : this.sqliteDbDisplayName + '.db',
    sqliteDbVersion : 2,
    sqliteDbSize : -1,//-1应该是表示无限制

    customTimeOut : 30 * 1000,

    customActiveOpacity : 0.5,

};

module.exports = ConfigUtil;