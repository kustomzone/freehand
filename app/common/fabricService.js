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
        
        function createBtn() {
            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'white',
                width: 100,
                height: 30
            });

            var text = new fabric.Text('Label', {left: 130, top: 108,fontSize:13});

            var group = new fabric.Group([rect, text], {
                left: 150,
                top: 100,
                stroke: 'black',
                strokeWidth:1,
            });

            canvas.add(group);
            setCustomDecor();
        };
        
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
            intializeCanvas:intializeCanvas,
            createBtn:createBtn
        };
        
    };
    
    angular.module('freehand').service('fabricService',[fabricService]);
    
})();

