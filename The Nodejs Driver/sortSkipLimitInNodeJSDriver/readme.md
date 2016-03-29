# Sort, Skip, Limit
A simple app to sort student grades in ascending order, before skipping the first six results, and then limiting the final results set. The toArray method is used in the callback to step through each document in the cursor and print out the remaining two student's name and their grade.

## Running the app
1. Run 'mongod'
2. Import dataset
> mongoimport homework.json -c grades -d homework
3. Install node dependencies
> npm install
4. Run node application
> node sort.js
