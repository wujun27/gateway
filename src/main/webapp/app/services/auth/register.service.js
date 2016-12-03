(function () {
    'use strict';

    angular
        .module('myGateWayApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('myoauth/api/register', {}, {});
    }
})();
