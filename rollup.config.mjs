import {readFileSync} from 'node:fs';
//用于解析项目中依赖的第三方模块的路径，以便 Rollup 可以正确地打包这些模块。
import resolve from '@rollup/plugin-node-resolve';
//将 CommonJS 模块转换为 ES6 模块，使得 Rollup 可以处理 CommonJS 格式的模块依赖
import commonjs from '@rollup/plugin-commonjs';
//处理 TypeScript 文件
import typescript from '@rollup/plugin-typescript';
//生成类型声明文件（.d.ts 文件）
import dts from 'rollup-plugin-dts';
//处理 CSS 文件，将其转换为浏览器可识别的格式
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
const pkg = JSON.parse(readFileSync('./package.json'));
/** @type {import("rollup").RollupOptions} */
export default [
	// 第一步先打包出commonjs和esmodule的文件
	{
		treeshake: {
			// 打包时将没有用到的代码移除
			moduleSideEffects: false,
		},
		input: './src/components/index.ts',
		external: ['react', 'react-dom'],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			},
			{
				file: pkg.unpkg,
				name: 'Wuyue',
				format: 'umd',
				globals: {
					'react': 'React',
					'react-dom': 'ReactDOM',
				},
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				//导出声明文件
				declaration: true,
				//类型目录
				declarationDir: 'types',
				//输出目录
				outDir: 'dist',
			}),
			postcss({
				plugins: [autoprefixer(), cssnano()],
				extract: 'index.css',
			}),
			replace({
				'process.env.NODE_ENV': '"production"',
				preventAssignment: true,
			}),
			terser(),
		],
	},
	// 第二步将esm打包出的文件再打包到index.d.ts中去
	{
		input: './dist/esm/types/components/index.d.ts',
		output: [{file: './dist/index.d.ts', format: 'esm'}],
		plugins: [dts()],
		external: [/\.(css|less|scss)$/],
	},
];
