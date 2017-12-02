/* 
 *Sidebar Controller
 */


(function(){
    
    'use strict';
    
    function sidebarCtrl(sidebarValues){
        var vm=this;
        
        vm.sidebarValues=sidebarValues;
        
    };
    
    angular.module('freehand').controller('sidebarCtrl',['sidebarValues',sidebarCtrl]);
    
    
})();

