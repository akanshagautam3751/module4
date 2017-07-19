(function(){
'use strict';

angular.module('MenuApp')
.component('catgories',{
  templateUrl : 'src/MenuApp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});
})();
