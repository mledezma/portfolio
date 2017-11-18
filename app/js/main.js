(function (window) {
	var textareaResize = function() {
		var textareaArray = document.querySelectorAll('textarea');
		var heightLimit = 200; /* Maximum height: 200px */

		textareaArray.forEach(function (textarea) {
			textarea.oninput = function () {
				textarea.style.height = ''; /* Reset the height*/
				textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + 'px';
			};
		});
	};
	
	var init = function () {
		textareaResize();	
	};

	window.app = {
		init: init
	};

}(window));

window.app.init();