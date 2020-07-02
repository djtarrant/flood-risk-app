# Flood Risk App
App to consume the flood-risk API. Built in React. The flood-risk API is in another repository on this github.

## Data Import
I created a Python script to process CSV data and put it in a MySQL database. I thought about using AWS Lambda for running the script, but in the end I decided that was overkill. The script did take a long time to run as there were 1.4m rows of data in the CSV, but it was not necessary to use the AWS service to run it.

## Development

### API design
I developed the API in Python Flask, which is also in my github. Flask is lightweight and easy to implement and allows for flexibility.
There is an endpoint for floodRisk which takes a postcode and returns flood risk data if the postcode is found in the data.
There is also an endpoint for searching podtcode matches by inputting partial text - this is to help with later development of nearby data.

###  API in Docker
The advantage of using docker to package the implementation is that it can now be run on any machine with docker installed and the API (in another repository) will automatically install it's own dependancies inside the container.

### Why REACT?
I wanted to learn to use REACT to consume an API and build a front end for it, primarily. On using it, it seems well suited to changing data inside components which can be linked to an API via form input.

### Future Development
Add the ability for the FloodRisk Component  to pick up nearby data. This will need a new API endpoint to generate a list of nearby postcodes based on a postcode input. These nearby postcodes would then have data printed for them via the original flood risk API call.


## Attributions
Contains Environment Agency data licensed under the [Open Government Licence v3.0] (http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
