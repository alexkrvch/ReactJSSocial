import React from "react";
import Preloader from "../components/Common/Preloader/Preloader";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>, FallbackComponent: React.ElementType = Preloader) {
	return (props: WCP) => {
		return (
			<React.Suspense fallback={<FallbackComponent />}>
				<WrappedComponent {...props} />
			</React.Suspense>
		)
	};
};
