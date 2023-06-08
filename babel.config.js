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
            "@assets/*": ["src/assets/*"],
            "@components/*": ["src/components/*"],
            "@constants/*": ["src/constants/*"],
            "@scenes/*": ["src/scenes/*"],
            "@store/*": ["src/store/*"],
            "@utils/*": ["src/utils/*"],
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
      "react-native-reanimated/plugin",
    ],
  };
};
