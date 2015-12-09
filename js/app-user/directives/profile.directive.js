let profileItem = function($state, ProfileService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      user: '='
    },
    template: `
      <div class="panelBig" ng-click="vm.clicked(user)">
        <div class = "panelLeft"> 
          <h5>{{ user.user_name }}</h5></li>
          <img src = "{{ user.pic }}">
        </div>
        <div class="panelRight">
          <ul>
          <li><span class="bold">User Name:  </span>{{ user_name }}</li><hr>
          <li><span class="bold">User Email:  </span>{{ email }}</li>
          
          
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

      </div>

    `,
    controller: 'ProfileController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.profile', { id: scope.user.user_name });
      });
    }
  };

};

profileItem.$inject = ['$state', 'ProfileService'];

export default profileItem;