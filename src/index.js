// Reference:
// https://babeljs.io/docs/en/babel-plugin-transform-typescript#typescript-compiler-options

module.exports = function() {
    return {
        presets: [
            ["@babel/preset-env", "@babel/preset-typescript"]
        ],
        plugins: [
            ["@babel/plugin-proposal-numeric-separator"],
            ["@babel/plugin-proposal-class-properties", {loose: true}],
            ["@babel/plugin-proposal-object-rest-spread"],
            ["@babel/plugin-transform-typescript"]
        ]
    }
}
