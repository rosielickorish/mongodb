This application depends on the companies.json dataset. To import a fresh version of the companies.json data, please type the following:

mongoimport -d crunchbase -c companies companies.json

If you have already mongoimported this data you will first need to drop the crunchbase database
in the Mongo shell. Do that by typing the following two commands, one at a time, in the Mongo shell:

use crunchbase
db.dropDatabase()

Run this application by typing:

node buildingQueryDocuments.js

This application runs with the following options passed in to build three different queries:

var allOptions = [
    {
        firstYear: 2002,
        lastYear: 2016,
        city: "Palo Alto"
    },
    {
        lastYear: 2010,
        city: "New York"
    },
    {
        city: "London"
    }
];

