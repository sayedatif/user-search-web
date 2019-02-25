const request = url => (
	fetch(url, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
);

export default request;