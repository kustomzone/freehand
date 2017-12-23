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
                {id: 0, default: 0, name: "Tools", active: 0},
                {id: 1, default: 1, name: "Properties", active: 1},
            ];

    angular.module('freehand').value('menuModes', menuModes);


    var fileMenuJson =
            [
                {id: 0, name: "New", value: "new_proj", class: "fh-plus"},
                {id: 1, name: "Open", value: "open_proj", class: "fh-folder-open"},
                {id: 2, name: "Save", value: "save_proj", class: "fh-floppy-o"},
                {id: 3, name: "Preview", value: "preview", class: "fh-play"},
            ];

    angular.module('freehand').value('fileMenuJson', fileMenuJson);

    var editMenuJson =
            [
                {id: 0, name: "Clone Object", value: "copy_obj", class: "fh-file-copy"},
                {id: 0, name: "Delete Object", value: "delete_obj", class: "fh-file-delete"}
            ];
            
     angular.module('freehand').value('editMenuJson', editMenuJson);

})();

