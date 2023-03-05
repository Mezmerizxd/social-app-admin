import type { ModuleOptions } from "webpack";

export const rules: Required<ModuleOptions>["rules"] = [
  {
    test: /native_modules[/\\].+\.node$/,
    use: "node-loader",
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 20 * 1024,
        outputPath: "/",
        publicPath: "/assets",
        name: "[path][name].[ext]",
        esModule: false,
      },
    },
  },
];
