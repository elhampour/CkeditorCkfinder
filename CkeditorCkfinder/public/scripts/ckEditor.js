(function ($, customCkEditorModule) {

    customCkEditorModule.init = function () {
        for (name in CKEDITOR.instances) {
            CKEDITOR.instances[name].destroy();
        };
        $(".wysiwyg").each(function (index, item) {

            if (typeof CKEDITOR !== 'undefined') {
                CKEDITOR.addCss('img {max-width:100%; height: auto;}');
                var editor = CKEDITOR.replace('Content', {
                    //extraPlugins: 'uploadimage,image2',
                    //removePlugins: 'image',
                    height: 350
                });

                // Just call CKFinder.setupCKEditor and pass the CKEditor instance as the first argument.
                // The second parameter (optional), is the path for the CKFinder installation (default = "/ckfinder/").
                CKFinder.setupCKEditor(editor, '/public/ckfinder');

                // It is also possible to pass an object with selected CKFinder properties as a second argument.
                // CKFinder.setupCKEditor( editor, { basePath : '../', skin : 'v1' } ) ;
            } else {
                document.getElementById('description').innerHTML = '<div class="tip-a tip-a-alert">This sample requires working Internet connection to load CKEditor from CDN.</div>'
            }

            //CKEDITOR.replace(id, {
            //    language: "fa",
            //    enterMode: CKEDITOR.ENTER_BR,
            //    height: 500,
            //    allowedContent: true,
            //    filebrowserBrowseUrl: roxyFileman,
            //    filebrowserImageBrowseUrl: roxyFileman + "?type=image",
            //    removeDialogTabs: "link:upload;image:upload",
            //    fullPage: false,
            //    removePlugins: "divarea"
            //});
        });
    }

    var wireEvents = function () {

    };

    $(function () {
        customCkEditorModule.init();
        wireEvents();
    });
}(jQuery, customCkEditorModule = window.customCkEditorModule || {}));