<?php
		session_start();
		if (!isset($_SESSION["username"])){
		header("location:login.html");
		}
		?>
<html>
<head>	
		<meta http-equiv="cache-control" content="max-age=0" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="expires" content="0" />
		<meta http-equiv="pragma" content="no-cache" />
		
		<title>CPU-Scheduling</title>
		
		<link rel="stylesheet" href="css/south-street/jquery-ui-1.10.4.min.css" />
		<link rel="stylesheet" href="css/animos.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="js/lib/jquery-1.11.0.min.js"></script>
		<script src="js/lib/jquery-ui-1.10.4.min.js"></script>
	</head>
	
	<body>
	
	<style>
.ui-dialog,.ui-draggable{
background-color:#e0eae0;
border:1px solid DodgerBlue;
padding:20px;
}
button  {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 10px;
  cursor: pointer;
}
button:hover {
  background-color: RoyalBlue;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
background: linear-gradient(0.09turn,#009933,#e0eae0,#99ccff)!important;
	
  position: relative;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  font-size:16px;
  text-align: center;
  padding: 10px 26px;
  text-decoration: none;
}

li a:hover {
	color: white;
	text-decoration: none;
	background:#009933;
}


</style>
	<ul>
  <li><a  href="index.html"> <big><i class="fa fa-home" aria-hidden="true"></i> Home<big></a></li>
  <li><a  href="https://www.kfueit.edu.pk/"> <big><i class="fa fa-info-circle" aria-hidden="true"></i> About<big></a></li>
  <li><a  href="logout.php"> <big><i class="fa fa-sign-out" aria-hidden="true"></i>Logout<big></a></li>
</ul>

		<div id="container" class="invisible">
			
		<div style="padding:20px;">
			
			
			<h4><br>Definition (Please input your data here and select any algorithm from the list.)<br></h4>
			<div id="sched_d">
				
				
				<div id="sched_pt_operate">
					<div id="sched_pt" class="bottomborder ui-corner-top ui-corner-bottom">
						<table id="sched_t">
							<thead id="sched_th"></thead>
							<tfoot id="sched_tf"></tfoot>
							<tbody id="sched_tb"></tbody>
						</table>
					</div>
					<div id="sched_s" class="bottomborder ui-corner-top ui-corner-bottom">
						<span class="header">Scheduling strategy:</span><br /><br />
						<select id="sched_s_cmb"></select>
						<br /><br />
						<span class="header">Strategy options:</span><br />
						<table id="sched_ops_t">
							<thead id="sched_ops_th"><tr><td>Option name</td><td>Option value</td></tr></thead>
							<tfoot id="sched_ops_tf"><tr><td></td><td></td></tr></tfoot>
							<tbody id="sched_ops_tb"></tbody>
						</table>
						<div id="sched_custom"></div>
					</div>
					<div class="clearFix"></div>
				</div>
				
			</div>
			
			<h4><br>Simulation (Here the Graphical Representation or Simulation of algorithm selected above will be shown.)<br></h4>
			<div id="sched_gantt">
				
				
				<div id="sched_gantt_operate">
					<div id="sched_canvas" class="topborder ui-corner-top"></div>
					<div id="sched_navi" class="bottomborder ui-corner-bottom"></div>
				</div>		<br><br><br><br><br><br>
				
			</div>
			
			
</div>
		
		
		<div style="left: 0;bottom: 0;position:fixed;width:100%;background: linear-gradient(0.09turn,#009933,#e0eae0,#99ccff)!important;color: black;text-align: center;padding:10px;0px 10px 0px" >

  <p> © 2017-2019 | Khwaja Fareed University of Engineering & Information Technology | Department of Computer Sciences |  kfueit.edu.pk</p>
</div>
</div>
		<script src="js/lib/raphael-min.js"></script>
		<script src="js/lib/rng.js"></script>
		<script src="js/lib/jquery-timing.min.js"></script>
		<script src="js/lib/moment-with-langs.min.js"></script>
		
		<script src="js/lib-ace/ace.js"></script>
		
		<script src="js/console.js"></script>
		<script src="js/tooltip.js"></script>
		<script src="js/dialog.js"></script>
		<script src="js/types.js"></script>
		
		<script src="js/ui/togglepanel.js"></script>
		
		<script src="js/animos/scheduling.js"></script>
		<script src="js/animos/scheduling_gantt.js"></script>
		<script src="js/animos/scheduling_stats.js"></script>
		<script src="js/animos/scheduling_ui.js"></script>
		
		<script src="js/animos.js"></script>		
	</body>
</html>
