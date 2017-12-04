/* 
 *Sidebar Controller
 */


(function(){
    
    'use strict';
    
    function sidebarCtrl(sidebarValues){
        var vm=this;
        
        vm.sidebarValues=sidebarValues;
        
        vm.createEle= function(json){
            switch(json.name){
                case 'winow':
                    break;
                case 'button':
                    break;
                case 'cntText':
                    break;
                case 'dummyTxt':
                    break;
                case 'spinner':
                    break;
                case 'progressbar':
                    break;
                case 'imgplaceholder':
                    break;
                default:
                        
            }
        };
        
    };
    
    angular.module('freehand').controller('sidebarCtrl',['sidebarValues',sidebarCtrl]);
    
    
})();

