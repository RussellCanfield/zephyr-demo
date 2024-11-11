import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";

export default defineConfig({
	runtime: {
		router: true,
	},
	output: {
		copy: {
			patterns: [
				{
					from: "src/assets",
					to: "assets",
				},
				{
					from: "public",
				},
			],
		},
	},
	builderPlugins: [pluginImageCompress()],
	plugins: [
		appTools({
			bundler: "rspack",
		}),
		tailwindcssPlugin(),
		moduleFederationPlugin(),
	],
});
