ReadMe for MovieSidekick


Demo

You can test a fully working live demo at: [INSERT DEMO LINK HERE].


What is MovieSidekick?

MovieSidekick is an app that allows users to rate movies, compare their ratings with other users, and see a list of the current top-rated movies.  Users can also see what movies are currently playing in local theaters and on Netflix, so they can experience immediate movie gratification.

Back-end and front-end engineering students at The Iron Yard Atlanta created MovieSidekick for their final project over the period of Monday, November 30 - Wednesday, December 16, 2015.


Intended Users

Movie Raters - Users who want to rate movies, compare their ratings with other users, and find a constantly updating list of the top-rated movies.

Moview Viewers - Users who want to discover what movies are available now, either playing at local theaters or available to watch via Netflix.


Landing Page

Users access MovieSidekick through the Landing Page.

Users who have already registered can click on the Login button to access the Login page and login.

Users who have not registered can click on the Create an Account button and will be redirected to the Create an Account Page where they can create an account with their email address. After completing this process, they will be redirected to the Login Page to login.

A cookie created with Angular-Cookies will be created on login and will expire once users logout.


Home Page

Users can read most recent movie reviews by users that are listed across two colums.  Review listings show the following: user profile pic, user name, user rating,thumbnail of movie poster, title, actors, and a few lines of their review.  Users can click on the review to read the full review.

In the side bar, users can see the top ten-rated movies, as well as a list of new releases.


Movie Page




My Movies Page

Users can view, edit, and delete the movies they have rated and/or reviewed.


Profile Page

Users can edit their details on the Profile Page.



Resources:

Back-End Engineering - Amazon S3 for storage, Ruby 4.24 and Ruby 4.22 for user authentication

INCLUDE API INFO
Front-End Engineering - AngularJS, Angular Cookies (user authorization), Angular UI-Router (routing of views), CSS3, Foundation5, and HTML5.


Contributors:

Back-End Engineering Students - Don Deckard and Carl Westmoreland

Front-End Engineering Students - Jef Blocker and Tommy Heaton


Usage

Clone this repo
Run npm install to install all necessary dependencies
Run ''
Run gulp start to start the server and a handful of other tasks
Assets Installed By Default

Normalize CSS

Assets Setup and ready for use

Bourbon Neat Font Awesome Foundation 5

How to use them?

At the top of your main.scss file, just import any of the following:

@import "bourbon";
@import "neat";

@import "foundation";

@import "font-awesome";
Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.

NPM Tools Used

Babel Browserify JavaScript Code Style SASS Mocha Chai
