This application depends on the companies.json dataset. To import a fresh version of the companies.json data, please type the following:

mongoimport -d crunchbase -c companies companies.json


If you have already mongoimported this data you will first need to drop the crunchbase database in the Mongo shell. Do that by typing the following two commands, one at a time, in the Mongo shell:

use crunchbase
db.dropDatabase()

Run this application by typing:

node overviewOrTags.js

In this application, the queryDocument() function builds an object that will be passed to find() to match a set of documents from the crunchbase.companies collection.
