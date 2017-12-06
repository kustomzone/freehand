/* 
 * Bridge between Fabric and Angular
 */


(function(){
    'use strict';
    
    function fabricService(){
        
        var canvas=null;
        var objLen={btn:0};
        
        function intializeCanvas() {
            var width = document.getElementById("fhCanvas").clientWidth;
            var height = document.getElementById("fhCanvas").clientHeight;

            canvas = new fabric.Canvas('fhCanvas', {width: width, height: height});
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
        };
        
        function createPopup(){
            var rect = new fabric.Rect({
                left: 200,
                top: 250,
                fill: 'white',
                width: 200,
                height: 130
            });
            
            var rect1 = new fabric.Rect({
                left: 200,
                top: 250,
                fill: '#ccc',
                width: 200,
                height: 30
            });
            
            var group = new fabric.Group([rect,rect1], {
                left: 150,
                top: 100,
                stroke: 'black',
                strokeWidth:1,
            });

            canvas.add(group);
            setCustomDecor();
            
            
        };
        
        function createBtn() {
            var rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'white',
                width: 100,
                height: 30
            });
            
            var btnText='Button';
            var text = new fabric.Text(btnText, {left: 130, top: 108,fontSize:13});

            var group = new fabric.Group([rect, text], {
                left: 150,
                top: 100,
                stroke: 'black',
                strokeWidth:1,
            });

            canvas.add(group);
            setCustomDecor();
            objLen.btn++;
        };
        
        function getObject(){
          var items={};
          items=canvas.toObject().objects;
          return items;
        };
        
        return {
            ccObj:function(json){
                createCustomObject(json);
            },
            intializeCanvas:intializeCanvas,
            createBtn:createBtn,
            createPopup:createPopup
        };
        
    };
    
    angular.module('freehand').service('fabricService',[fabricService]);
    
})();

