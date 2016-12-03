(function() {
    'use strict';

    angular
        .module('myGateWayApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('myoauth/api/account/reset_password/init', {}, {});

        return service;
    }
})();
