import { Suspense, useState, useEffect, type FC } from "react";

interface ImageProps {
	src: string;
	alt: string;
	className?: string;
}

const ImageLoader: FC<ImageProps> = ({ src, alt, className }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setLoaded(true);
		return () => {
			img.onload = null;
		};
	}, [src]);

	if (!loaded)
		return (
			<div
				className="cl-relative cl-overflow-hidden"
				aria-label={`Loading ${alt}`}
			>
				<div className={`${className} cl-bg-gray-200 dark:cl-bg-gray-700`}>
					<div className="cl-absolute cl-inset-0">
						<div className="cl-h-full cl-w-full cl-animate-shimmer cl-bg-gradient-to-r cl-from-transparent cl-via-white/20 cl-to-transparent" />
					</div>
				</div>
			</div>
		);

	return (
		<img
			src={src}
			alt={alt}
			className={className}
			loading="lazy"
			decoding="async"
			fetchPriority="high"
		/>
	);
};

export const SuspenseImage: FC<ImageProps> = (props) => {
	return (
		<Suspense
			fallback={
				<div
					className={`${props.className} cl-animate-pulse cl-bg-gray-200 dark:cl-bg-gray-700`}
					aria-label={props.alt}
				/>
			}
		>
			<ImageLoader {...props} />
		</Suspense>
	);
};
