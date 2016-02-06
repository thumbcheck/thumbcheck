import Session from '../models/sessions.js';

// GET request for sessions
function getSessions(params, callback) {
	return Session.findAll({
		where: {
			presentation_id: params
		}
	})
	.then((response) => {
		callback(response);
	})
} 

// taking POST request to create a new session
function createSession(params, callback) {
	console.log('hrere', params);
	return Session.create({
		presentation_id: params.presentation_id,
		identifier: params.identifier
	})
	.then((response) => {
		callback(response)
	})
}

export default {
	getSessions: getSessions,
	createSession: createSession
}