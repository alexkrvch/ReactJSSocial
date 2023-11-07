import React from "react";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>, FallbackComponent: any) {
	return (props: WCP) => {
		if (!FallbackComponent) FallbackComponent = <div>Loading... :) </div>; // by default
		return (
			<React.Suspense fallback={FallbackComponent}>
				<WrappedComponent {...props} />
			</React.Suspense>
		)
	};
};
