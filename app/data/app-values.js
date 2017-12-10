/* 
 * Data for app
 */

(function () {

    'use strict';

    var sidebarJson =
            [
                {"name": "button", "value": "Button"},
                {"name": "label", "value": "Label"},
                {"name": "txtBox", "value": "Text Box"},
                {"name": "chkBox", "value": "Check Box"},
                {"name": "radioBtn", "value": "Radio Button"},
                {"name": "cntText", "value": "Content Text"},
                {"name": "dummyTxt", "value": "Lorem Ipsum"},
                {"name": "progressbar", "value": "Progress Bar"},
                {"name": "imgplaceholder", "value": "Image Place Holder"},
                {"name": "popup", "value": "Pop-up"},
                {"name": "avatar", "value": "Avatar"}

            ];
    angular.module('freehand').value('sidebarValues', sidebarJson);


    //0 = true , 1= false
    var menuModes =
            [
                {id: 0, default: 0, name: "Tools",active:0},
                {id: 1, default: 1, name: "Properties",active:1},
            ];

    angular.module('freehand').value('menuModes', menuModes);
})();

