'use strict';
console.log('loading function');

exports.handler = async (event, context) => {
	console.log('received event:', JSON.stringify(event, null, 2));
	const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}
