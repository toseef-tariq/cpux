

// Console
var Console = new function() {
	var self = this;
	var console = $("#console");
	var outputReady = false;
	var messageQueue = new Array();
	
	this.log = function(message) {
		if (!outputReady || messageQueue.length > 0)
		{
			messageQueue.push(message);
		}
		else
		{
			write(message);
		}
	};
	
	function write(message) {
		var consoleContainer = $("#consoleContainer");
		var console = $("#console");
		
		var datetime = moment().format('YYYY-MM-DD HH:mm:ss');
		console.append($("<li>" + "[ " + datetime + " ]&nbsp;&nbsp;" + message + "</li>").fadeIn("slow"));
		
		if (console.children("li").length > 50)
			console.children("li").first().remove();
		
		consoleContainer.scrollTop(console.height());
	}
	
	function writeQueue() {
		while(messageQueue.length > 0)
			write(messageQueue.shift());
	}
	
	$(document).ready(function() {
		outputReady = true;
		writeQueue();
	});
};