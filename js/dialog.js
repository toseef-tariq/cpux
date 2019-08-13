

var Dialog = new function() {
	var self = this;
	var _container = "#dialog";
	
	this.ok = function(t, msg, callback) {
		$('<div></div>').dialog({
			dialogClass: "no-close",
			resizable: false,
			show: {effect: "fade", duration: "slow"},
			hide: "fade",
			modal: true,
			title: t,
			closeOnEscape: false,
			open: function() {
				$(this).html(msg);
			},
			buttons: {
				"OK": function() {
					$( this ).dialog( "close" );
					if (callback) callback();
				}
			}
		});
	}
	
	this.yesCancel = function(t, msg, callback) {
		$('<div></div>').dialog({
			dialogClass: "",
			resizable: false,
			show: {effect: "fade", duration: "slow"},
			hide: "fade",
			modal: true,
			title: t,
			text: msg,
			closeOnEscape: true,
			open: function() {
				$(this).html(msg);
			},
			buttons: {
				"Yes": function() {
					$( this ).dialog( "close" );
					callback();
				},
				"Cancel": function() {
					$( this ).dialog( "close" );
				}
			}
		});
	};
};