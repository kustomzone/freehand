/* 
 * Data for app
 */

(function(){
    
    'use strict';
    
    var sidebarJson =
            [
                {"name":"button","value":"Button"},
                {"name":"cntText","value":"Content Text"},
                {"name":"dummyTxt","value":"Lorem Ipsum"},
                {"name":"spinner","value":"Spinner"},
                {"name":"progressbar","value":"Progress Bar"},
                {"name":"imgplaceholder","value":"Image Place Holder"},
                {"name":"popup","value":"Pop-up"},
                {"name":"avatar","value":"Avatar"}

            ];
    angular.module('freehand').value('sidebarValues',sidebarJson);
    
    
})();

