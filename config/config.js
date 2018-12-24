
const env = process.env.NODE_ENV;
// console.log(env);
// 开发环境下env默认为dev   其他情况无默认值
var config;

env ? config = require(`./dev.js`) : config = require(`./prd.js`)

// console.log(config)
export default config.default;
