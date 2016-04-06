#Overview Or Tags
Run this application by typing:

```node overviewOrTags.js```

In this application, the queryDocument() function builds an object that will be passed to find() to match a set of documents from the crunchbase.companies collection. The followin options are passed in to build up two different queries:

```var allOptions = [
    {
        overview: "wiki",
    },
    {
        milestones: "CMO"
    }
];```

The application then creates a query that matches documents with the ```milestones``` option or the ```overview``` option in either the overview field or in the tag_list. The queries are as follows, where ```allOptions``` are passed to the application as ```options```:

```
var query = {};
query["$or"] = 
      [
        {"overview" :{"$regex": options.overview, "$options": "i"}}, 
        {"tag_list": {"$regex": options.overview, "$options": "i"}} 
      ]
      
query["milestones.source_description"] =
      {"$regex": options.milestones, "$options": "i"};
```

Note that ```{$regex": <word to match on>, <??>: "i"}``` provides a case-insensitive matching.
