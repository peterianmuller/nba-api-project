This small app is going to query to http://data.nba.net/ API and make some tables of data in order to practice creation and styling of tables.

We'll first set up a basic page that has a single button that will get back data and display certaiun data points about the first 5 players.

We'll then have a more advanced feature that will enable to user to request data on a certain player!

Some entries on the table are lacking data.
Currently, not displaying data for entires.
UI affected by not displaying entries.

Idea here is to pick different data points from the 2016 and 2017 season and build some dope data visualization shapes with d3

Hmmm if I'd lke to use headshots, I could use: https://nba-players.herokuapp.com/

Seems to be issues with stats api for the nba module.

Plan -> Figure out different ways to display data vis using NBA data.

What data do I have access to?

* All players metadata (height, weight etc)
* Individual players stats
* Playoff schedule
* data/stats for teams

What questions do I want to ask?

Internationalization of game

* Using brithplaces of athletes to mark coordinates on map
* downside: more complicated b/c of google maps api

* Comparison of two players via bar graph

x-axis could be player
y-axis could be stat (points per game)

Ablity to make simple bar graph is done!
