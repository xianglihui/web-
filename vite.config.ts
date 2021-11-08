import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import path from "path";

// 返回当前Node.js进程执行时的工作目录
const CWD = process.cwd();
// 环境变量
export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,

    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    plugins: [
      vue(),
      // 在 Vite 项目中按需引入组件
      styleImport({
        libs: [
          {
            libraryName: "vant",
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      }),
    ],
  };
};
