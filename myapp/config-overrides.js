const path = require('path')
//react-app-rewired是1.×的版本
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname, './src/')

//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);

//     return config;
// }
//react-app-rewired是2.×的版本

const { override, addDecoratorsLegacy, disableEsLint, useBabelRc, fixBabelImports, addWebpackAlias } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy(), // S7装饰器支持
    //按需加载antd
    // fixBabelImports('import', { libraryName: "antd", style: "css" }, "antd"),
    //做App用antd-mobile
    fixBabelImports('import', { libraryName: "antd-mobile", style: "css" }, "antdm"),
    //禁用EsLint
    disableEsLint(),
    // 添加别名
    addWebpackAlias({
        '@': path.join(__dirname, './src/'),
        '~': path.join(__dirname, './src/components')
    }),
)