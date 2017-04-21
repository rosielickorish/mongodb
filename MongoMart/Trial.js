var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname +'/views');

MongoClient.connect("mongodb://localhost:27017/mongomart", function(err, db) {

  assert.equal(null, err);
  console.log("Successfully connected to server");

  app.get('/', function(req, res){
    db.collection('item').find({}).toArray(function(err,docs){
      console.log("Query " + docs.title);
      res.render('trial', {'item': docs});

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
