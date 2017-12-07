/* 
 *Sidebar Controller
 */


(function(){
    
    'use strict';
    
    function sidebarCtrl(sidebarValues,fabricService){
        var vm=this;
        
        vm.sidebarValues=sidebarValues;
        
        vm.createEle= function(json){
            switch(json.name){
                case 'popup':
                     fabricService.createPopup();
                    break;
                case 'button':
                    fabricService.createBtn();
                    break;
                case 'cntText':
                    fabricService.createContentTxt();
                    break;
                case 'dummyTxt':
                    break;
                case 'spinner':
                    break;
                case 'progressbar':
                    break;
                case 'imgplaceholder':
                    fabricService.createIMH();
                    break;
                default:
                        
            }
        };
        
    };
    
    angular.module('freehand').controller('sidebarCtrl',['sidebarValues','fabricService',sidebarCtrl]);
    
    
})();

