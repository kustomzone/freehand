/* 
 * ToolBar Control for all the Upper Menu Controls
 */


(function(){
    
    'use strict';
    
    function toolbarCtrl(fabricService,fileMenuJson,editMenuJson){
        var vm=this;
        
        vm.fileMenu=fileMenuJson;
        vm.editMenu=editMenuJson;
        
        var deleteObj =function(){
            fabricService.deleteObj();
        };
        
        vm.editAction =function(menuJson){
            var menu=menuJson.value;
            switch (menu) {
                case "delete_obj":
                    deleteObj();
                    break;
                    
                default:
                    
                    break;
            }
        };
    };
    
    angular.module("freehand").controller("toolbarCtrl",['fabricService','fileMenuJson','editMenuJson',toolbarCtrl]);
    
})();