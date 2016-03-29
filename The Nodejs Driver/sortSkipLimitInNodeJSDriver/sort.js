var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/homework', function(err, db) {

    console.log("Successfully connected to MongoDB.");

    var cursor = db.collection('grades').find({});
    cursor.limit(2);
    cursor.skip(6);
    cursor.sort({"grade": -1});

    cursor.toArray(function(err,docs){
      docs.forEach(function(doc){
        console.log(doc.student + ", score: " + doc.grade);
      })

    db.close();
    });

});
