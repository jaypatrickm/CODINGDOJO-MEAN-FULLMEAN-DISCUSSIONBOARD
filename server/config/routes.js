//=======================================================
//Routes File - Discussion Board
//=======================================================
module.exports = function(app)
{
//=======================================================
//require any controllers you may need
//=======================================================
var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');
var comments = require('./../controllers/comments.js');
//=======================================================
	
	//root route
	app.get('/', function(req, res) 
	{
		res.render('index');
	})

	//login.html routes
	app.post('/checkUserExists/:any', function(req, res)
	{
		console.log('routes');
		users.checkUserExists(req, res);
	})
	app.post('/addUser', function(req, res)
	{
		users.addUser(req, res);
	})
	
	//dashboard.html routes
	app.post('/addTopic', function(req, res)
	{
		topics.addTopic(req, res);
	})
	app.get('/getTopics', function(req, res)
	{
		topics.getTopics(req, res);
	})
	// app.get('#/user/:any', function(req, res)
	// {
	// 	users.getUser(req, res);
	// })

	//users
	app.get('/showUser/:any', function(req, res)
	{
		users.showUser(req, res);
	})

	//topic
	app.get('/getTopicById/:id', function(req, res)
	{
		console.log('routes');
		topics.getTopicById(req, res);
	})

	app.get('/getPostsById/:id', function(req, res)
	{
		console.log('in routes for getPostsById');
		posts.getPostsById(req, res);
	})

	app.post('/addPost', function(req, res)
	{
		console.log('in routes for addpost');
		posts.addPost(req, res);
	})

	app.post('/addComment', function(req, res)
	{
		console.log('in routes for addComment');
		comments.addComment(req, res);
	})

	app.get('/getCommentsByPostId/:id', function(req, res)
	{
		console.log('inroutes to get comments by post id');
		comments.getCommentsByPostId(req, res);
	})

	app.post('/upVotePost/:id', function(req, res)
	{
		console.log('in routes');
		posts.upVotePost(req, res);
	})

};