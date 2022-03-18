module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { targets: { node: "current" } }]],
    plugins: [
      [
        "module-resolver",
        {
          // cwd: "babelrc",
          root: ["./"],
          alias: {
            /**
             * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
             */
            "^~(.+)": "./src/\\1",
          },
          extensions: [
            ".js",
            ".jsx",
            ".ios.js",
            ".ios.jsx",
            ".android.js",
            ".android.jsx",
            "native.js",
            ".json",
          ],
        },
      ],
    ],
  };
};
