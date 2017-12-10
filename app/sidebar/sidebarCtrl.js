/* 
 *Sidebar Controller
 */


(function(){
    
    'use strict';
    
    function sidebarCtrl(sidebarValues,fabricService,menuModes){
        var vm=this;
        
        vm.sidebarValues=sidebarValues;
        vm.menuModes= menuModes;
        
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
                    fabricService.createDummyTxt();
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
    
    angular.module('freehand').controller('sidebarCtrl',['sidebarValues','fabricService','menuModes',sidebarCtrl]);
    
    
})();

