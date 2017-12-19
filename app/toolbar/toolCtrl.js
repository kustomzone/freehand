/* 
 * ToolBar Control for all the Upper Menu Controls
 */


(function(){
    
    'use strict';
    
    function toolbarCtrl(fabricService,fileMenuJson){
        var vm=this;
        
        vm.fileMenu=fileMenuJson;
        
        vm.deleteObj =function(){
            fabricService.deleteObj();
        }
    };
    
    angular.module("freehand").controller("toolbarCtrl",['fabricService','fileMenuJson',toolbarCtrl]);
    
})();