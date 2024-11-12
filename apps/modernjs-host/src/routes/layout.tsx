import Navbar from "@/layout/Navbar";
import { Outlet } from "@modern-js/runtime/router";
import "./index.css";
import { init, preloadRemote } from "@module-federation/enhanced/runtime";
import { ThemeProvider } from "@/layout/ThemeProvider";
import "hero/shared";

// init({
// 	name: "modernjs",
// 	remotes: [],
// });

// preloadRemote([
// 	{
// 		nameOrAlias: "hero",
// 	},
// ]);

export default function Layout() {
	return (
		<ThemeProvider>
			<Navbar />
			<main className="h-full flex bg-white dark:bg-gray-900">
				<Outlet />
			</main>
		</ThemeProvider>
	);
}
