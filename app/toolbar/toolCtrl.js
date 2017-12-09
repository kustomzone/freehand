/* 
 * ToolBar Control for all the Upper Menu Controls
 */


(function(){
    
    'use strict';
    
    function toolbarCtrl(fabricService){
        var vm=this;
        
        vm.deleteObj =function(){
            fabricService.deleteObj();
        }
    };
    
    angular.module("freehand").controller("toolbarCtrl",['fabricService',toolbarCtrl]);
    
})();