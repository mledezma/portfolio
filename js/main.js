(function(window){
    var init = function() {
        var textareaArray = document.querySelectorAll("textarea");
        var heightLimit = 200; /* Maximum height: 200px */
        
        textareaArray.forEach(function(textarea) {

            textarea.oninput = function() {
                console.log('waaat')
                textarea.style.height = ""; /* Reset the height*/
                textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
            };
        })
        
    }

    window.app = {
        init: init
    }

}(window))

app.init();