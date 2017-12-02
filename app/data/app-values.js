/* 
 * Data for app
 */

(function(){
    
    'use strict';
    
    var sidebarJson =
            [
                {"name":"window","value":"Window"},
                {"name":"button","value":"Button"},
                {"name":"cntText","value":"Content Text"},
                {"name":"dummyTxt","value":"Lorem Ipsum"},
                {"name":"spinner","value":"Spinner"},
                {"name":"progressbar","value":"Progress Bar"},
                {"name":"imgplaceholder","value":"Image Place Holder"}

            ];
    angular.module('freehand').value('sidebarValues',sidebarJson);
    
    
})();

