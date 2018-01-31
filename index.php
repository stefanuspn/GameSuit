<!DOCTYPE html>
<html>
<head>
  <title>Game Sederhana</title>
  <link rel="stylesheet" href="asset/css/suit.css?v=<?php echo filemtime('./asset/css/suit.css');?>">
  <link rel="stylesheet" href="asset/css/animate.css?v=<?php echo filemtime('./asset/css/animate.css');?>">
  <link rel="stylesheet" type="text/css" href="dist/sweetalert.css?v=<?php echo filemtime('./dist/sweetalert.css');?>">
</head>
<body>

  <div class="content">
  <div class="container">
    <div class="box animated fadeInUp">
    <h1>Game Suit</h1>
    
    <div class="player">
      <img src="https://maxcdn.icons8.com/Share/icon/Hands//hand_scissors1600.png" id="player1">
          <img src="https://maxcdn.icons8.com/Share/icon/Hands//whole_hand1600.png" id="player2">
          <img src="https://maxcdn.icons8.com/Share/icon/Hands//hand_rock1600.png" id="player3"><br><br>
     <a href="gamesuit.php" class="klik_menu"><input type="button" value="START"></a>
          <div class="result">
           <footer>
             Create By Stefanus Prasetyo Nugroho
           </footer>
          </div>
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
