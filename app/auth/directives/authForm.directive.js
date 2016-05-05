(function() {
  'use strict';

  angular
    .module('swoleciety.auth')
    .directive('authForm', authForm);

  function authForm() {
    return {
      templateUrl: 'auth/directives/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '=',
        formTitle: '@',
        submitForm: '&'
      }
    };
  }

  function AuthFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
  }

})();