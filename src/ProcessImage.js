const Clarifai = require('clarifai');

const ai = new Clarifai.App({
	apiKey: process.env.apiKey
   });

const handleApiCall = (req, res) => {
	console.log(req, res);
	ai.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.query.input)
	.then(data => {
		res.json(data);
	}).catch(err => res.status(400).json('Error: ' +  err));
}

module.exports = {
	HandleApiCall: handleApiCall
}