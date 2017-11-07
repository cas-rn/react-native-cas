import Storage from "react-native-storage";
import { Alert, AsyncStorage } from "react-native";
import * as TmpDataUtil from "./TmpDataUtil";
const alert = Alert.alert;

let GlobalDataUtil = {

    init() {

        let storage = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size : 1000,

            // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend : AsyncStorage,

            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires : null,

            // 读写时在内存中缓存数据。默认启用。
            enableCache : true,

            // 如果storage中没有相应数据，或数据已过期，
            // 则会调用相应的sync方法，无缝返回最新数据。
            // sync方法的具体说明会在后文提到
            // 你可以在构造函数这里就写好sync的方法
            // 或是写到另一个文件里，这里require引入
            // 或是在任何时候，直接对storage.sync进行赋值修改
            sync : () => {
            }  // 这个sync文件是要你自己写的
        });

        // 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用

        // 对于web
        // window.storage = storage;

        // 对于react native
        global.storage = storage;

        global.alert = alert;

        // 这样，在此**之后**的任意位置即可以直接调用storage
        // 注意：全局变量一定是先声明，后使用
        // 如果你在某处调用storage报错未定义
        // 请检查global.storage = storage语句是否确实已经执行过了

        //这里有个小技巧可以在发布时屏蔽掉所有的console.*调用。
        // React Native中有一个全局变量__DEV__用于指示当前运行环境是否是开发环境。
        // 我们可以据此在正式环境中替换掉系统原先的console实现。
        if (!__DEV__) {
            global.isDev = false;
            global.console = {
                info : () => {
                },
                log : () => {
                },
                warn : () => {
                },
                error : () => {
                },
            };
        } else {
            global.isDev = true;
            // global.console = {
            //     info: () => {
            //     },
            //     log: () => {
            //     },
            //     warn: () => {
            //     },
            //     error: () => {
            //     },
            // };
        }

        global.LOG = (...args) => {
            console.log('/------------------------------\\');
            console.log(...args);
            console.log('\\------------------------------/');
            return args[ args.length - 1 ];
        };

        global.TmpDataUtil = TmpDataUtil;

        global.lastBackTime = 1;//记录点击返回键的时间
        global.isShowingToastLoading = false;//

        Array.prototype.del = function (n) {
            if (n < 0 || n >= this.length) {
                return this;
            } else {
                return this.slice(0, n).concat(this.slice(n + 1, this.length));
            }
        };

        global.gUserInfo = null;
        global.gAccessTokenInfo = {
            access_token : '',
            expired_time : '',
        };
        global.hasLogin = null;

    },

};

module.exports = GlobalDataUtil;