(function() {
    'use strict';

    angular
        .module('myGateWayApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('myoauth/api/account/change_password', {}, {});

        return service;
    }
})();
