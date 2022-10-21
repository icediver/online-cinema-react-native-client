export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message;
	console.log(JSON.stringify(message));

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message;
};
