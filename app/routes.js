module.exports = function(app) {
	app.get('/', function(req, res){
		res.send('Hello World');
	});

	app.get('/:username/:password', function(req, res) {
		console.log(req.params.username + ' ' + req.params.password);
		res.send('Hi');
	});

}