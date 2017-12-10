/* 
 * Menu Service for switching Several Windows in Sidebar
 */


(function(){
    
    'use strict';
    
    function menuService(menuModes){
        
        var vm=this;
        
        vm.modes=menuModes;
    };
    
    angular.module("freehand").service("menuService",['menuModes',menuService]);
})();