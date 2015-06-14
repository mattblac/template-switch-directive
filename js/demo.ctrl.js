(function () {
    'use strict';

    angular
        .module('app')
        .controller('DemoCtrl', controller);

    function controller() {
        var demo = this;

        // Dropdown Options
        demo.dropdown = [
            {'name': 'Chapter One', 'tmpl': 'tmpl/chOne.html'},
            {'name': 'Chapter Two', 'tmpl': 'tmpl/chTwo.html'},
            {'name': 'Chapter Three', 'tmpl': 'tmpl/chThree.html'}
        ];
        demo.selected = demo.dropdown[0];

        // TemplateView Options
        demo.options = [{
            'as': 'demo',
            'context': demo
        }];
    }
})();