

var Types = new function() {
	var self = this;
	var MAXINT = 65535;
	
	this.tracks = 256;
	
	// Allow returns true, if the input can become acceptable (PSEUDO-STATE)
	// Accept returns true, if the input is fully accepted
	this.pub = {
		// Text with no white-space chars
		"STRING" : {
			"allow" : function (toTest) {
				return /^([a-zA-Z]|[0-9])*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^[a-zA-Z]([a-zA-Z]|[0-9]){0,9}$/.test(toTest);
			}
		},
		// Number with 0 allowed
		"NUMBER" : {
			"allow" : function (toTest) {
				return /^[0-9]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^(0|([1-9][0-9]*))$/.test(toTest) && parseInt(toTest) <= MAXINT;
			}
		},
		// Number without 0
		"NUMBER+" : {
			"allow" : function (toTest) {
				return /^[0-9]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^[1-9][0-9]*$/.test(toTest) && parseInt(toTest) <= MAXINT;
			}
		},
		// Number between 1 and 10
		"NUMBER1TO10" : {
			"allow" : function (toTest) {
				return /^[0-9]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^[1-9][0-9]*$/.test(toTest) && parseInt(toTest) <= 10;
			}
		},
		// Range with 0 allowed
		"RANGE" : {
			"allow" : function (toTest) {
				return /^([0-9]*|([0-9]+-[0-9]*))$/.test(toTest);
			},
			"accept" : function (toTest) {
				var rX = /^((0|([1-9][0-9]*))(-([1-9][0-9]*))?)$/;
				var match = rX.exec(toTest);
				
				return (match != null && match[2] && match[5]) ? 
					parseInt(match[2]) < parseInt(match[5]) && parseInt(match[5]) <= MAXINT 
					: match != null && parseInt(match[2]) <= MAXINT;
			}
		},
		// Range without 0
		"RANGE+" : {
			"allow" : function (toTest) {
				return /^([0-9]*|([0-9]+-[0-9]*))$/.test(toTest);
			},
			"accept" : function (toTest) {
				var rX = /^(([1-9][0-9]*)(-([1-9][0-9]*))?)$/;
				var match = rX.exec(toTest);
				
				return (match != null && match[2] && match[4]) ? 
					parseInt(match[2]) < parseInt(match[4]) && parseInt(match[4]) <= MAXINT 
					: match != null && parseInt(match[2]) <= MAXINT;
			}
		},
		// Value between 0 and 1 in format "0.XX"
		"DECIMAL_FRACTION" : {
			"allow" : function (toTest) {
				return /^([0-9]|\.)*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^0\.(0[1-9]|[1-9][0-9])$/.test(toTest);
			}
		},
		// Comma separated values (numbers)
		"CSV_NUMBERS" : {
			"allow" : function (toTest) {
				return /^([0-9]|,|\s)*$/.test(toTest);
			},
			"accept" : function (toTest) {
				if(/^((0|([1-9][0-9]*))(,(0|([1-9][0-9]*)))*)$/.test(toTest))
				{
					var values = toTest.split(",");
					for (var key in values)
						if (values[key] > (self.tracks-1)) return false;
				}
				else return false;
				
				return true;
			}
		},
		// Like number, but "self.tracks" as maximum
		"TRACKNUMBER" : {
			"allow" : function (toTest) {
				return /^[0-9]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return /^(0|([1-9][0-9]*))$/.test(toTest) && parseInt(toTest) <= (self.tracks-1);
			}
		},
		// "up" or "down"
		"HEADDIRECTION" : {
			"allow" : function (toTest) {
				return /^[a-zA-Z]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return (toTest == "up" || toTest == "down");
			}
		},
		// "true" or "false"
		"BOOL" : {
			"allow" : function (toTest) {
				return /^[a-zA-Z]*$/.test(toTest);
			},
			"accept" : function (toTest) {
				return (toTest == "true" || toTest == "false");
			}
		}
	};
};