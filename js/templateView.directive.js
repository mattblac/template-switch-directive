(function() {
    'use strict';

    angular
        .module('app')
        .directive('templateView', directive);

    directive.$inject = ['$templateRequest', '$compile'];

    function directive($templateRequest, $compile) {
        return {
            restrict: 'A',
            scope: {
                watch: '=watch',
                options: '=options'
            },
            link: function(scope, elem, attrs, ctrl) {
                // Defaults
                scope[scope.options.as] = scope.options.context;

                // Init Function
                getTemplate();

                // Functions
                function getTemplate() {
                    $templateRequest(scope.watch.tmpl).then(function(html){
                        elem[0].innerHTML = '';
                        elem.append($compile(html)(scope));
                    });
                }

                // Watches
                scope.$watch('watch', function(newVal, oldVal) {
                    if (newVal !== oldVal) {
                        getTemplate();
                    }
                })
            }
        }
    }
})();