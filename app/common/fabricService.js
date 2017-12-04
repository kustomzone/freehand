/* 
 * Bridge between Fabric and Angular
 */


(function(){
    
    'use strict';
    
    
    function fabricService(){
        
        var canvas=null;
        
        function createCustomObject(json){
            
        };
        
        function intializeCanvas() {
            var width=document.getElementById("fhCanvas").clientWidth;
            var height=document.getElementById("fhCanvas").clientHeight;

            canvas = new fabric.Canvas('fhCanvas',{width:width,height:height});

            //Test

            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'red',
                width: 20,
                height: 20
            });
            
            canvas.add(rect);
            console.log(getObject());
        };
        
        function getObject(){
          var objects={};
          
          objects=canvas.toObject();
          return objects;
        };
        
        return {
            ccObj:function(json){
                createCustomObject(json);
            },
            intializeCanvas:intializeCanvas
        };
        
    };
    
    angular.module('freehand').service('fabricService',[fabricService]);
    
})();

