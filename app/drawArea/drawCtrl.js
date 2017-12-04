/* 
 * Draw Area Controller has function for the canvas and intialize Fabric JS
 */


(function(){
    
    'use strict';
    
    function drawArea(fabricService){
        
        var vm=this;
        
        vm.intialize = function(){
            console.log("drae init");
            fabricService.intializeCanvas();
        };
        
    };
    
    angular.module('freehand').controller('drawCtrl',['fabricService',drawArea]);
    
})();


