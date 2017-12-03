/* 
 *Sidebar Controller
 */


(function(){
    
    'use strict';
    
    function sidebarCtrl(sidebarValues){
        var vm=this;
        
        vm.sidebarValues=sidebarValues;
        
        vm.createEle= function(ele){
            console.log(ele);
        };
        
    };
    
    angular.module('freehand').controller('sidebarCtrl',['sidebarValues',sidebarCtrl]);
    
    
})();

