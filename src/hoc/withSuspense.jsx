import React from "react";


export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	return class extends React.Component {
		render() {
			if (!FallbackComponent) FallbackComponent = <div>Loading... :) </div>; // by default
			return (
				<React.Suspense fallback={FallbackComponent}>
					<WrappedComponent {...this.props} />
				</React.Suspense>
			);
		}
	};
};