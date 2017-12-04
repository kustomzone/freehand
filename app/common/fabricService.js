/* 
 * Bridge between Fabric and Angular
 */


(function(){
    
    'use strict';
    
    
    function fabricService(){
        
        var canvas=null;
        
        function intializeCanvas() {
            var width = document.getElementById("fhCanvas").clientWidth;
            var height = document.getElementById("fhCanvas").clientHeight;

            canvas = new fabric.Canvas('fhCanvas', {width: width, height: height});

            //Test

            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'red',
                width: 20,
                height: 20
            });

            canvas.add(rect);
            setCustomDecor();
        };
        
        function setCustomDecor() {
            var lastItemIndex = getObject().length - 1;
            canvas.item(lastItemIndex).setControlVisible('mtr', false);
            canvas.item(lastItemIndex).set({
                borderColor: 'grey',
                cornerColor: 'black',
                cornerSize: 6,
                transparentCorners: false
            });
        }
        ;
        
        function getObject(){
          var items={};
          
          items=canvas.toObject().objects;
          console.log(items.length);
          return items;
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

