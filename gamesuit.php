<!DOCTYPE html>
<html>
<head>
	<title>Game Suit</title>
<link rel="stylesheet" href="asset/css/suit.css?v=<?php echo filemtime('./asset/css/suit.css');?>">
  <link rel="stylesheet" href="asset/css/animate.css?v=<?php echo filemtime('./asset/css/animate.css');?>">
  <link rel="stylesheet" type="text/css" href="dist/sweetalert.css?v=<?php echo filemtime('./dist/sweetalert.css');?>">
</head>
<body>
	<div class="container ">
		<div class="box animated fadeInUp">
		<h1>Simple Game Suit</h1>
		<a class="klik_menu" onclick="LoadExit();"><p align="right">Exit</p></a>
		<div class="player">
			<h2>PLAYER :</h2>
					<img src="https://maxcdn.icons8.com/Share/icon/Hands//hand_scissors1600.png" id="player1" onclick="GameSuit('gunting')">
					<img src="https://maxcdn.icons8.com/Share/icon/Hands//whole_hand1600.png" id="player2" onclick="GameSuit('kertas')">
					<img src="https://maxcdn.icons8.com/Share/icon/Hands//hand_rock1600.png" id="player3" onclick="GameSuit('batu')">
					<div class="com">COMPUTER :
						<img src="https://image.flaticon.com/icons/png/512/0/827.png" id="kom" class="animated fadeInUp">
					</div>
					<div class="result">
						Result     : <span id="hasil" class="animated bounceInRight">?</span><br>
						Skor Kamu : <span id="result" class="animated bounceInLeft">?</span><br>
						Skor Lawan : <span id="musuh" class="animated bounceInLeft">?</span>
					</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="asset/js/jquery-3.2.1.min.js?v=<?php echo filemtime('./asset/js/jquery-3.2.1.min.js');?>"></script>
   <script src="asset/js/bootstrap.min.js?v=<?php echo filemtime('./asset/js/bootstrap.min.js');?>"></script>
   <script type="text/javascript" src="dist/sweetalert.min.js?v=<?php echo filemtime('./dist/sweetalert.min.js');?>"></script>
  <script type="text/javascript" src="asset/js/Stef.js?v=<?php echo filemtime('./asset/js/Stef.js');?>"></script>
  <script type="text/javascript" src="suit.js?v=<?php echo filemtime('suit.js');?>"></script>
</body>
</html>