let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/signup');

  $stateProvider
    
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })

    // Home State
    .state('root.home', {
      url: '/',

      // Use Controller as Syntax
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })

    // My Movies
    .state('root.movies', {
      url: '/movies',
      controller: 'MoviesController as vm',
      templateUrl: 'templates/app-movies/movies.tpl.html'
    })

    // // Add Movie
    // .state('root.addMovie', {
    //   url: '/movies/add',
    //   controller: 'MoviesAddController as vm',
    //   templateUrl: 'templates/app-movies/movies-add.tpl.html'
    // })

    // Single Movie
    .state('root.singleMovie', {
      url: '/movies/:id',
      controller: 'MovieSingleController as vm',
      templateUrl: 'templates/app-movies/movie-single.tpl.html'
    })
     .state('root.review', {
      url: '/movies/:id/reviews',
      controller: 'MovieSingleController as vm',
      templateUrl: 'templates/app-movies/movie-single.tpl.html'
    })
    //     // My Reviews
    // .state('root.myReviews', {
    //   url: '/movies/:id',
    //   controller: 'MyReviewsController as vm',
    //   templateUrl: 'templates/app-movies/movie-single.tpl.html'
    // })

    // User Profile
    .state('root.profile', {
      // url: '/user/:id',
      url: '/profile',
      controller: 'ProfileController as vm',
      templateUrl: 'templates/app-user/profile.tpl.html'
    })

    // Signup
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-user/signup.tpl.html'
    })
    // Review

    
    // Login
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;