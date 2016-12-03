(function() {
    'use strict';

    angular
        .module('myGateWayApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('myoauth/api/account/reset_password/finish', {}, {});

        return service;
    }
})();
