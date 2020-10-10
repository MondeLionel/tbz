const express = require('express');
const app = express();
// const favicon = require('serve-favicon');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const port = 8080;
const path = require('path');
const axios = require('axios');




// connect to database
let db = new sqlite3.Database('db/content.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  // console.log('Connected to the content database.');
});


db.close((err) => {	
  if (err) {
    return console.error(err.message);
  }
  // console.log('Close the database connection.');
});

 

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/assets',express.static(__dirname + '/public'))

app.get('/', (req,res)=> {
	// http://localhost/testwp/wp-json/wp/v2/categories
	axios.get('http://localhost/testwp/wp-json/wp/v2/categories')
	.then(function(response){
		category = response.data;

		res.render('index',{bodyClass: 'home', title: 'Those Bloody Zulus', category:category})
	})
	.catch(function(error){
		console.log(error)
		res.render('err',{bodyClass:'stories', err: error,title: 'Those Bloody Zulus'})
	})
	
})




	// view all chapters from all the books
app.get('/stories', (req,res)=>{
	// console.log("list of all the stories")
	axios.get('http://localhost/testwp/wp-json/wp/v2/posts?_embed&order=asc')
	.then(function(response){
		let stories = response.data;
		// let images =stories._embedded;
		console.log(stories.id)
		let postId = []
		let currentId = []

		stories.forEach(function(item){
			// console.log(item.id)
			postId.push(item.id)


		})
		res.render('story',{stories: stories,bodyClass:'stories',title: 'Those Bloody Zulus'})
	})
	.catch(function(error){
		console.log(error);
		res.render('err',{bodyClass:'stories', err: error,title: 'Those Bloody Zulus'})
	})
})





	// view all chapters from one of the books
app.get('/stories/:title', (req,res)=>{
	// console.log("list of all the stories")
	axios.get('http://localhost/testwp/wp-json/wp/v2/posts?categories=' + req.params.id +'&order=asc')
	.then(function(response){
		let book = response.data;
		let  = 
		// let images =stories._embedded;
		console.log(book.id)

		res.render('story',{book: book,bodyClass:'stories',title: 'Those Bloody Zulus'})
	})
	.catch(function(error){
		console.log(error);
		res.render('err',{bodyClass:'stories', err: error,title: 'Those Bloody Zulus'})
	})
})



app.get('/stories/:id', (req,res)=>{
	console.log("individual story view")

	axios.get('http://localhost/testwp/wp-json/wp/v2/posts/' + req.params.id + '?_embed')
	.then(function(response){
		let storyID = response.data;		
		
		res.render('single',{storyID: storyID,bodyClass:'single',title: 'Those Bloody Zulus'})

	
	})
	.catch(function(error){
		res.render('err',{bodyClass:'stories', err: error,title: 'Those Bloody Zulus'})
	})
})

app.listen(port, ()=>{
	console.log(port)
})