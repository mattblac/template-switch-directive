# templateView Directive
AngularJS directive for dyncamically switching templates based on a model change

#### Usage
Add a `<script>` include for `templateView.directive.js` to your index file.

Add the `template-view` directive as an attribute to the element you would like your templates to show up within. The `watch` attribute will relay the model your watching for changes on, and the `options` attribute will relay the variable name you're using in your ControllerAs syntax, as well as your parent controller's scope.

``` html
<div template-view
   	 watch="demo.selected"
	 options="demo.options">
</div>
```

Provide an options model in your controller to pass your ControllerAs name and the controller's scope.

``` javascript
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
```

#### Examples
See the related blog post @ <a href="http://www.codaform.net">Codaform</a></br>
See the code in action @ <a href="http://plnkr.co/edit/66SwNeMdVx15YgbPZgng?p=preview">Plunker</a>

