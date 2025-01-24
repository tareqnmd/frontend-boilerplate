'use client';

const Error = ({ error }: { error: Error }) => {
	return <div>Error: {error.message}</div>;
};

export default Error;
