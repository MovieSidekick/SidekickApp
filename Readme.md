ReadMe for MovieSidekick


Demo

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


Signup Page

Users can create an account by submitting a user name, email address, and password.  Once they've created an account, they're redirected to the Login Page.


Login Page

Users login by submitting their email address and password.  Upon logging in, they're redirected to the Home Page.


Home Page

Users can read most recent movie reviews by users that are listed across two colums.  Review listings show the following: user profile pic, user name, user rating,thumbnail of movie poster, title, actors, and a few lines of their review.  Users can click on the review to read the other user's full review.

In the side bar, users can see the top ten highested-rated movies, as well as a list of new releases.


Movies Page

Users can see the most recent movie reviews by other users, which display the following:  thumbnail,
genre, title, actors, user-rating, and user-comments.  By clicking on the review, users are redirected to the Movie Page for that title.


Movie Page

Users can view details about an individual movie by clicking on the Movie Page.  These details include: image, title, actors, rotten-tomatoes-rating, critics-rating, user-rating, genre, and running-time.

The Movie Page includes links to find theaters where the movie is playing locally or where users can stream the movie now.

Users can add/edit a review of this movie from this page.

Reviews of this movie by other users are listed below.


My Movies Page

Users can see a list of the movies they've reviwed, which shows the following information: thumbnail,
title, actors, average-rating, and user-rating.

Users can edit and delete the movies they have rated and/or reviewed.  


Profile Page

Any user can see another user's profile by clicking on their user-name.  The Profile Page displays the following: user-name, profile-pic (image URL), and email.  It also lists the most recent movie reviews the user has submitted.

A user can edit his/her own profile information, including password.


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
