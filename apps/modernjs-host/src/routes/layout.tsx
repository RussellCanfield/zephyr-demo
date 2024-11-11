import Navbar from "@/layout/Navbar";
import { Outlet } from "@modern-js/runtime/router";
import "./index.css";
import { init, preloadRemote } from "@module-federation/enhanced/runtime";

init({
	name: "modernjs",
	remotes: [
		{
			name: "hero",
			entry: "http://localhost:4201/mf-manifest.json",
		},
	],
});

export default function Layout() {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}
