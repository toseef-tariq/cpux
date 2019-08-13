

var Tooltip = new function() {
	var self = this;
	var _container = "#tooltip";

	var sem = false;
	var tOut = null;
	var msgQueue = new Array();
	var warnQueue = new Array();
	
	$(document).ready(function(){
		$(_container).click(function(){
			if (tOut != null) clearTimeout(tOut);
			handleQueue();
		});
	});
	
	var handleQueue = function() {
		if (warnQueue.length > 0)
		{
			var elem = warnQueue.shift();
			doWarn(elem["message"], elem["timeout"], false);
		}
		else if (msgQueue.length > 0)
		{
			var elem = msgQueue.shift();
			doShow(elem["message"], elem["timeout"], false);
		}
		else if (warnQueue.length == 0 && msgQueue.length == 0)
		{
			if ($(_container).css("display") == "none")
				sem = false;
			else
				$(_container).fadeOut(handleQueue);
		}
	};
	
	var doShow = function(msg, timeout, blink) {
		$(_container).css("background", "#fffffa");
		$(_container).css("color", "#459e00");
		$(_container).html(msg);
		$(_container).append('<div style="position:absolute;top:0px;right:3px;font-size:8px;color:#bababa;">' 
			+ 'M:' + msgQueue.length + ' W:' + warnQueue.length + '</div>');
		Console.log("MESSAGE: " + msg.toString().replace(/<(?:.|\n)*?>/gm, ' '));
		$(_container).fadeTo("slow", 0.97, 
			function(){if (blink) $(this).effect("highlight", "slow");});
		tOut = window.setTimeout(handleQueue, timeout * 1000);
	};
	
	this.show = function(msg, timeout) {
		if(sem)
		{
			msgQueue.push({"message" : msg, "timeout" : timeout});
		}
		else
		{
			sem = true;
			doShow(msg, timeout, true);
		}
	};
	
	var doWarn = function(msg, timeout, blink) {
		$(_container).css("background", "#fffffa");
		$(_container).css("color", "#ff0000");
		$(_container).html(msg);
		$(_container).append('<div style="position:absolute;top:0px;right:3px;font-size:8px;color:#bababa;">' 
			+ 'M:' + msgQueue.length + ' W:' + warnQueue.length + '</div>');
		Console.log("WARNING: " + msg.replace(/<(?:.|\n)*?>/gm, ' '));
		$(_container).fadeTo("slow", 0.97, 
			function(){if (blink) $(this).effect("highlight", "slow");});
		tOut = window.setTimeout(handleQueue, timeout * 1000);
	};
	
	this.warn = function(msg, timeout) {
		if(sem)
		{
			warnQueue.push({"message" : msg, "timeout" : timeout});
		}
		else
		{
			sem = true;
			doWarn(msg, timeout, true);
		}
	};
};