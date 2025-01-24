'use client';

const GlobalError = ({ error }: { error: Error }) => {
	return <div>Global Error: {error.message}</div>;
};

export default GlobalError;
