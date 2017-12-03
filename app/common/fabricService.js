/* 
 * Bridge between Fabric and Angular
 */


(function(){
    
    'use strict';
    
    
    function fabricService(){
        
        var self=this;
        
        function createCustomObject(json){
            
        };
        
        function intializeCanvas (){
            
        };
        
        return {
            ccObj:function(json){
                createCustomObject(json);
            }
        };
        
    };
    
    angular.module('freehand').service('fabricService',[fabricService]);
    
})();

