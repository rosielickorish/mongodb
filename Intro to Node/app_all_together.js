var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname +'/views');

MongoClient.connect('mongodb://localhost:27017/mongomart', function(err,db){

  assert.equal(null, err);
  console.log("Successfully connected to server");


  app.get('/', function(req, res){
    var query = [{$project:{_id:1, category:1, title:1}}, {$group:{_id:"$category", num:{$sum:1}}}, {$sort:{_id:1}} ];
    var cursor = db.collection('item').aggregate(query)

    cursor.sort({"category":1});

    cursor.toArray(function(err,docs){
      docs.forEach(function(doc){
	        console.log(doc._id + ", category: " + doc.num);
    });

      res.render('movies', {'item': docs});
    });
  });

  app.use(function(req, res){
      res.status(404);
  });

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Express sever listening on port %s", port);
});

});
