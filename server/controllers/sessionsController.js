import Session from '../models/sessions.js';
import Session_questions from '../models/sessions_question.js';

// GET request for sessions
function getSessions(params, callback) {			
	return Session.findAll({
		where: {
			presentation_id: params
		}
	})
	.then((response) => {		
		// then find all the questions for that presentation
		callback(response);
		// for (var i = 0; i < response.length; i++) {			 
		// 	return Session_questions.findAll({
		// 		where: {
		// 			session_id: response[i].id
		// 		}
		// 	})
		// 	.then((response2) => {
		// 		response[i].question_results = response2;
		// 	})
		// }		
		// console.log('sending back');
		// callback(response[0]);
	})
} 

// taking POST request to create a new session
function createSession(params, callback) {	
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