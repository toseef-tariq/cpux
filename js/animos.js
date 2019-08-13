
var VERSION = 2.61;

// On document ready
$(document).ready(function(){
	// Add noscript warning invisibility
	$("#warning").addClass("invisible");
	$("#example").hide();
	
	// Add build number to header
	$("#buildVersion").html("(V. " + VERSION + ")");
	
	// Remove noscript invisibility
	$("#container").removeClass("invisible");

	// Create toggle panels and tabs
	$("#container").togglepanels();
	$("#sched_d").tabs();
	$("#sched_d").removeClass("ui-widget");
	$("#sched_gantt").tabs();
	$("#sched_gantt").removeClass("ui-widget");
	$("#sched_stats").tabs();
	$("#sched_stats").removeClass("ui-widget");
	
	Sched_UI.initSchedStrategies();
	
	Sched_Gantt.initCanvas(100);
	Sched_Gantt.createNaviButtons();
	
	Sched_UI.createProcessDefinitionTable(false);
	Sched_UI.createStatsButton();
	
	Table.createTable();
	
	$("#sched_s_cmb").prop('selectedIndex', 0);
	$("#sched_s_cmb").trigger('change');
	
	// Show default panels
	$("#sched_d_h").click();
	$("#sched_gantt_h").click();
	//$("#sched_stats_h").click();
	
	// Scroll top document
	$.wait(1000, function(){$(document).scrollTop(0);});
	
	Tooltip.show("AnimOS CPU-Scheduling is ready...", 3);

	
	// Adding some random processes
	Tooltip.show("Adding some random processes...", 3);
	for (var i = 1; i <= 3; i++)
	{
		(function(i){
			$.wait(600*i,function(){
				$("#name").val("Process"+i);
				$("#arrival").val(Math.floor(Math.random()*10));
				switch (i)
				{
					case 1:
						$("#cpuBurst").val(Math.floor(Math.random()*9)+1);
						$("#ioBurst").val(Math.floor(Math.random()*9)+1);
						break;
					case 2:
						var v = Math.floor(Math.random()*4)+1;
						var v2 = Math.floor(Math.random()*(9-v))+v+1;
						$("#cpuBurst").val(v + "-" + v2);
						$("#ioBurst").val(Math.floor(Math.random()*9)+1);
						break;
					case 3:
						$("#cpuBurst").val(Math.floor(Math.random()*9)+1);
						var v = Math.floor(Math.random()*4)+1;
						var v2 = Math.floor(Math.random()*(9-v))+v+1;
						$("#ioBurst").val(v + "-" + v2);
						break;
					default:
						$("#cpuBurst").val(Math.floor(Math.random()*9)+1);
						var v = Math.floor(Math.random()*4)+1;
						var v2 = Math.floor(Math.random()*(9-v))+v+1;
						$("#ioBurst").val(v + "-" + v2);
						break;
				}
				$("#sched_tf").find("button").click();
			});
		})(i);
	}
});

